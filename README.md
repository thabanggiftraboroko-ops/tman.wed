# Hope Community Foundation Website

A complete responsive multi-page website prototype based on Proposal 1: Non-Profit Organisation.

## Pages
- `index.html` — Home
- `about.html` — About Us
- `projects.html` — Projects and Services
- `get-involved.html` — Volunteer and Donation information
- `enquiry.html` — Enquiry about support programmes
- `gallery.html` — Interactive gallery
- `contact.html` — Contact form

## Technologies
- HTML5
- CSS3
- JavaScript

## Features
- Responsive desktop/tablet/mobile layout
- Shared external stylesheet linked to all pages
- CSS reset, readable typography, colour variables and reusable layout classes
- Desktop, tablet and mobile media-query breakpoints
- Responsive SVG logo and flexible grid layouts
- Semantic HTML structure
- SEO meta descriptions
- Accessible navigation and form labels
- Mobile navigation menu
- HTML5 and JavaScript form validation
- Netlify Forms submission for contact, volunteer and programme enquiries
- Search field filters the projects list as the user types
- Interactive Johannesburg map on the contact page
- Interactive gallery modal with real, locally stored photos
- Social sharing links for Facebook, WhatsApp and LinkedIn
- `robots.txt` and `sitemap.xml` for search engine crawlers
- Security response headers and long-lived caching for image assets on Netlify
- Local SVG logo
- No external libraries required

## How to run
Open `index.html` in a web browser, or use VS Code with a local Live Server extension. Forms can only be submitted after deploying the site to Netlify.

## Deploying with Netlify

1. Connect the GitHub repository to Netlify and use the repository root as the publish folder. The `netlify.toml` file sets this up for a static site.
2. Deploy the site. Netlify detects the three HTML forms: `contact`, `volunteer` and `programme-enquiry`.
3. In the Netlify site dashboard, open **Forms** to check submissions. To receive email alerts, add an email notification under the form notification settings.
4. Netlify stores form submissions in the site dashboard. To receive email alerts, enable email notifications in the dashboard.
5. After the site is deployed, replace the example website URL in `robots.txt`, `sitemap.xml` and the share-link fallback in `get-involved.html` with the actual public Netlify URL.

## Part 2: CSS and responsive design evidence

The website was tested after adding `css/style.css` and `js/script.js`:

- Desktop screenshot: `assets/desktop-evidence.png` at 1440px wide.
- Tablet screenshot: `assets/tablet-evidence.png` at 768px wide.
- Mobile screenshot: `assets/mobile-evidence.png` at 390px wide.

The stylesheet uses a small set of reusable classes for the header, buttons, cards, sections, forms and footer. The SVG logo scales with `max-width: 100%`, and the layout uses flexible grid columns. At tablet size the larger grids become two columns and the navigation becomes a menu button below 850px. At mobile size the grids become single-column layouts and the content uses smaller spacing. The pages were checked in a browser at all three sizes, and the mobile navigation button was confirmed to appear.

## Academic note
This is a student project prototype. Organisation contact details, impact figures, donation amounts and address are fictional examples and should be replaced with verified information for a real organisation.

## Image sources

The gallery photographs are compressed local copies of Unsplash images. Unsplash permits free use under its [image license](https://unsplash.com/license). The descriptive filenames and alt text identify each photo's subject.

## Part 3: Functionality, SEO and security changelog

- Added an enquiry page for support programme questions, with required fields, browser validation and an availability note.
- Connected contact, volunteer and programme enquiry forms to Netlify Forms with browser validation, a spam honeypot and a clear success/error message.
- Added live text search to filter the project cards and an OpenStreetMap view showing the general Johannesburg area.
- Replaced gallery emoji with compressed photos and descriptive alt text. The lightbox opens the selected photo and returns focus to its gallery button when closed.
- Added Facebook, WhatsApp and LinkedIn sharing links so visitors can help spread the website.
- Added page-specific keyword metadata and clearer page titles, plus crawler instructions and a sitemap.
- Added Netlify security headers, a Content Security Policy and browser caching for static image assets.
- Added an enquiry link to the site's navigation and updated this README with the new page and features.

Social sharing makes it easier for visitors to promote the site; the organisation still needs to share the link through its own accounts and ask partner websites for backlinks. The gallery photos are about 254 KB combined and load as visitors scroll down the page.
