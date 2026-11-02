document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (menuButton && siteNav) {
    menuButton.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
  }

  document.querySelectorAll('#year').forEach((year) => {
    year.textContent = new Date().getFullYear();
  });

  document.querySelectorAll('.js-form').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const currentForm = event.currentTarget;
      const formData = new FormData(currentForm);
      const status = form.querySelector('.form-status');

      if (!form.checkValidity()) {
        form.reportValidity();
        if (status) status.textContent = 'Please complete the required fields.';
        return;
      }

      const formType = currentForm.dataset.formType;
      let subject = 'Website enquiry';
      if (formType === 'contact') subject = `Contact: ${formData.get('subject')}`;
      if (formType === 'volunteer') subject = `Volunteer interest: ${formData.get('interest')}`;
      if (formType === 'enquiry') subject = `Programme enquiry: ${formData.get('programme')}`;

      const body = [
        `Name: ${formData.get('name')}`,
        `Email: ${formData.get('email')}`,
        formData.get('phone') ? `Phone: ${formData.get('phone')}` : '',
        formData.get('interest') ? `Area of interest: ${formData.get('interest')}` : '',
        formData.get('programme') ? `Programme: ${formData.get('programme')}` : '',
        formData.get('message') ? `Message: ${formData.get('message')}` : ''
      ].filter(Boolean).join('\n');

      if (status) {
        const programmeMessage = formType === 'enquiry'
          ? 'Availability depends on the selected programme and current resources.'
          : 'Review the message in your email app and press Send there.';
        status.textContent = `Your email app should open. ${programmeMessage}`;
      }
      window.location.href = `mailto:hello@hopecommunity.org.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  });

  const projectSearch = document.querySelector('#project-search');
  if (projectSearch) {
    const projectCards = document.querySelectorAll('.project-card');
    const searchStatus = document.querySelector('#project-search-status');

    projectSearch.addEventListener('input', () => {
      const searchTerm = projectSearch.value.trim().toLowerCase();
      let visibleCount = 0;

      projectCards.forEach((card) => {
        const matches = card.textContent.toLowerCase().includes(searchTerm);
        card.hidden = !matches;
        if (matches) visibleCount += 1;
      });

      if (searchStatus) {
        searchStatus.textContent = visibleCount === 1
          ? 'Showing 1 project.'
          : `Showing ${visibleCount} projects.`;
      }
    });
  }

  const modal = document.querySelector('#gallery-modal');
  const modalTitle = document.querySelector('#modal-title');
  const modalIcon = document.querySelector('#modal-icon');
  let lastGalleryItem;
  const closeModal = () => {
    if (modal && !modal.hidden) {
      modal.hidden = true;
      if (lastGalleryItem) lastGalleryItem.focus();
    }
  };

  if (modal) {
    document.querySelectorAll('.gallery-item').forEach((item) => {
      item.addEventListener('click', () => {
        lastGalleryItem = item;
        modalTitle.textContent = item.dataset.title || 'Gallery image';
        modalIcon.textContent = item.querySelector('span').textContent;
        modalIcon.setAttribute('aria-label', `${modalTitle.textContent} illustration`);
        modal.hidden = false;
        modal.querySelector('.modal-close').focus();
      });
    });

    modal.querySelector('.modal-backdrop').addEventListener('click', closeModal);
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeModal();
    });
  }
});
