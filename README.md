# Portfolio Website

This repository hosts the code for Lee Paulison's portfolio built with [React](https://react.dev/) and [Vite](https://vitejs.dev/). The site showcases projects and includes a contact form protected by Google reCAPTCHA. A Firebase Cloud Function verifies each reCAPTCHA token before an email is sent.

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Create an `.env` file and provide your reCAPTCHA site key and the URL of the Cloud Function:

```bash
VITE_APP_RECAPTCHA_SITE_KEY=your_site_key
VITE_APP_RECAPTCHA_URL=https://your-cloud-function-url
```

For the Firebase function, set `RECAPTCHA_SECRET_KEY` in the environment variables on Firebase. To install dependencies for the function locally run:

```bash
npm install --prefix functions
```

## Building and Previewing

Create a production build with:

```bash
npm run build
```

Locally preview the built app using:

```bash
npm run preview
```

## Firebase Functions

The `functions/` directory contains `verifyRecaptcha`, an HTTPS function that validates reCAPTCHA tokens. It is used by the contact form to help prevent spam submissions. Deploy it with Firebase CLI after running its linter:

```bash
npm run lint --prefix functions
firebase deploy --only functions
```

## Project Structure

- `src/` – React components and pages
- `public/` – static assets
- `functions/` – Firebase Cloud Function for reCAPTCHA verification

Tailwind CSS is configured in `tailwind.config.js` and Vite is set up with the `@vitejs/plugin-react` plugin.

