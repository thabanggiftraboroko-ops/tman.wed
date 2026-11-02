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
      const status = form.querySelector('.form-status');
      const submitButton = form.querySelector('button[type="submit"]');

      if (!form.checkValidity()) {
        form.reportValidity();
        if (status) status.textContent = 'Please complete the required fields.';
        return;
      }

      const formData = new FormData(currentForm);
      const encodedData = new URLSearchParams();
      formData.forEach((value, key) => encodedData.append(key, String(value)));
      if (submitButton) submitButton.disabled = true;
      if (status) status.textContent = 'Sending your form...';

      fetch(currentForm.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodedData.toString()
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Form submission failed with status ${response.status}.`);
          }

          if (status) status.textContent = 'Thank you. Your form has been received.';
          currentForm.reset();
        })
        .catch((error) => {
          console.error('Unable to submit the form:', error);
          if (status) {
            status.textContent = 'We could not send your form. Please try again or email us directly.';
          }
        })
        .finally(() => {
          if (submitButton) submitButton.disabled = false;
        });
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

  const shareCard = document.querySelector('.share-card');
  if (shareCard) {
    const shareUrl = window.location.protocol === 'http:' || window.location.protocol === 'https:'
      ? window.location.href
      : shareCard.dataset.siteUrl;
    const shareText = 'Learn about Hope Community Foundation and its community programmes.';
    const shareTargets = {
      facebook: `https://www.facebook.com/sharer/sharer.php?${new URLSearchParams({ u: shareUrl })}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?${new URLSearchParams({ url: shareUrl })}`
    };

    shareCard.querySelectorAll('[data-share]').forEach((link) => {
      const target = shareTargets[link.dataset.share];
      if (target) {
        link.href = target;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
    });
  }

  const modal = document.querySelector('#gallery-modal');
  const modalTitle = document.querySelector('#modal-title');
  const modalImage = document.querySelector('#modal-image');
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
        modalImage.src = item.dataset.image;
        modalImage.alt = item.dataset.alt;
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
