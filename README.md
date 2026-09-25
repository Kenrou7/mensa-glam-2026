This is a [Next.js](https://nextjs.org) project for the Mensa Glam event site.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on GitHub Pages

This repository is configured to deploy to GitHub Pages through GitHub Actions.

### One-time GitHub configuration

1. Open your repository on GitHub.
2. Go to **Settings** -> **Pages**.
3. In **Build and deployment**, set **Source** to **GitHub Actions**.
4. Ensure your default branch is `main` (the workflow deploys pushes to `main`).

### Deploy

1. Push commits to `main`.
2. GitHub Actions runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
3. After the workflow finishes, your site is published at:
	- Project site: `https://<username>.github.io/<repository>/`
	- User/organization site (if repository is `<username>.github.io`): `https://<username>.github.io/`

### Local production build (static export)

```bash
npm run build
```

This generates static files in `out/`, the same artifact deployed to GitHub Pages.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
