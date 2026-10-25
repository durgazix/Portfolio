# Durga Prasad Sahoo Portfolio

A conversational portfolio website for Durga Prasad Sahoo, a Full-Stack AI Engineer, where navigation and search return portfolio sections as chatbot-style responses.

Deployment paths are configured per host: Vercel builds at `/`, while GitHub Pages uses this repository's `/Portfolio/` path. Vercel uses its built-in `VERCEL=1` environment variable to select the root path.

For GitHub Pages, set the repository's Pages build and deployment source to **GitHub Actions** in Settings → Pages. The workflow in `.github/workflows/deploy.yml` builds the site and publishes `dist` whenever changes are pushed to `main`.
