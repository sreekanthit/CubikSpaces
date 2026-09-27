# The Cubik Spaces – React website

Simple, clean single-page website built with React + Vite.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Customise
- `src/data.js` – company name, phone, email, menu, services, steps, image URLs
- `src/styles.css` – colours (CSS variables at top), fonts, spacing
- `src/components/Contact.jsx` – connect the enquiry form to your backend / EmailJS / Formspree
- Replace the Unsplash image URLs in `data.js` with photos of your own projects.

## Configure EmailJS
1. In EmailJS, create an email service and a template. Set the template's **To** address to the inbox that should receive enquiries.
2. Add template variables `from_name`, `from_email`, `phone`, and `project_type` to the email subject/body. Set the reply-to field to `{{reply_to}}` if you want to reply directly to the visitor.
3. Copy `.env.example` to `.env` and fill in the service ID, template ID, and public key from EmailJS. Restart the Vite dev server after changing `.env`.
4. Add the same `VITE_EMAILJS_*` values to your hosting provider's environment variables before deploying.

The EmailJS public key is used by the browser, so enable EmailJS domain/origin restrictions for your deployed site and configure its spam protection.
