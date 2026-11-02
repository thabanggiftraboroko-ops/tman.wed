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
- Client-side form validation
- Forms prepare an email in the visitor's email app; no details are stored by this static website
- Search field filters the projects list as the user types
- Interactive Johannesburg map on the contact page
- Interactive gallery modal
- `robots.txt` and `sitemap.xml` for search engine crawlers
- Local SVG logo
- No external libraries required

## How to run
Open `index.html` in a web browser, or use VS Code with a local Live Server extension.

## Part 2: CSS and responsive design evidence

The website was tested after adding `css/style.css` and `js/script.js`:

- Desktop screenshot: `assets/desktop-evidence.png` at 1440px wide.
- Tablet screenshot: `assets/tablet-evidence.png` at 768px wide.
- Mobile screenshot: `assets/mobile-evidence.png` at 390px wide.

The stylesheet uses a small set of reusable classes for the header, buttons, cards, sections, forms and footer. The SVG logo scales with `max-width: 100%`, and the layout uses flexible grid columns. At tablet size the larger grids become two columns and the navigation becomes a menu button below 850px. At mobile size the grids become single-column layouts and the content uses smaller spacing. The pages were checked in a browser at all three sizes, and the mobile navigation button was confirmed to appear.

## Academic note
This is a student project prototype. Organisation contact details, impact figures, donation amounts and address are fictional examples and should be replaced with verified information for a real organisation.

## Part 3: Functionality and SEO changelog

- Added an enquiry page for support programme questions, with required fields, browser validation and an availability note.
- Updated the volunteer and contact forms to validate their details and prepare an email for the user's email app. A real email service or backend would be needed to send messages directly.
- Added live text search to filter the project cards and an OpenStreetMap view showing the general Johannesburg area.
- Improved the gallery modal so it opens with the selected illustration and returns focus to the selected gallery button when closed.
- Added page-specific keyword metadata and clearer page titles, plus crawler instructions and a sitemap.
- Added an enquiry link to the site's navigation and updated this README with the new page and features.

For deployment, publish this website folder and update the URLs in `sitemap.xml` and the sitemap line in `robots.txt` if the site's public address is different from the example GitHub Pages address.
