# Durga Prasad Sahoo Portfolio

A conversational portfolio website for Durga Prasad Sahoo, a Full-Stack AI Engineer, where navigation and search return portfolio sections as chatbot-style responses.

## Tech Stack

- React 19
- Vite
- CSS with responsive layouts and animations
- Lucide React icons

## Structure

```text
src/
  components/
    ChatCanvas.jsx
    ResponseCard.jsx
    ResumeViewer.jsx
    SearchBar.jsx
    Sidebar.jsx
    TopNav.jsx
  data/
    portfolioData.js
  intentRouter.js
  App.jsx
  App.css
  index.css
public/
  projects/
  resume.pdf
```

## Run Locally

```bash
npm install
npm run dev
```

The development server will print the local URL, usually `http://localhost:5173`.

## Edit Content

Update `src/data/portfolioData.js` to change the profile summary, skills, projects, experience, contact details, project image paths, verified profile links, or suggested prompts. The UI components consume this data without needing content changes.

For a real profile image, add `public/profile.jpg`. Until then, the sidebar displays the `AM` placeholder. Replace the sample files in `public/projects/` with your own thumbnails and update each project's `images` array. Images load lazily and open in a lightbox when clicked.

Replace `public/resume.pdf` with the current resume. The same `ResumeViewer` component powers the inline chat response and the standalone `/resume` page, including download and open-in-new-tab actions.

## Find Me Online

The online-presence intent is deliberately restricted to LinkedIn, Instagram, and Google. It never surfaces links to other platforms. Update the three verified URLs in `src/data/portfolioData.js` under `findMe.links`.

## Screenshot

_Add a screenshot of the finished portfolio here._

## Deployment

Build the production bundle with:

```bash
npm run build
```

Deploy the generated `dist` directory to Vercel, Netlify, or any static hosting provider. For Vercel or Netlify, connect the repository and use `npm run build` as the build command with `dist` as the output directory.

The `/resume` path is handled by the client app, so configure the host to rewrite unknown paths to `index.html` when deploying as a single-page application.
