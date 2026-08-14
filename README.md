# veasnawt.github.io

Personal engineering hub and portfolio built with **Next.js**, **TypeScript**, and **Vanilla CSS Modules**, optimized for static export and hosting on **GitHub Pages** (`https://veasnawt.github.io`).

---

## 🚀 Features

- **Next.js App Router & TypeScript**: Full type-safety, clean modular architecture, and modern React Server/Client component split.
- **Static Export**: Configured with `output: 'export'` and unoptimized images in [`next.config.ts`](file:///D:/Veasna/App%20Development/veasnawt.github.io/next.config.ts) for GitHub Pages compatibility.
- **Automated GitHub Actions CI/CD**: Preconfigured workflow in [`.github/workflows/deploy.yml`](file:///D:/Veasna/App%20Development/veasnawt.github.io/.github/workflows/deploy.yml) that builds and deploys the site whenever you push to `main`.
- **Bypass Jekyll Processing**: Includes `public/.nojekyll` to ensure GitHub Pages correctly serves `_next` static assets without 404s.
- **Interactive Developer Console**: Built-in terminal component responding to interactive commands (`help`, `whoami`, `projects`, `skills`, `contact`, `clear`).
- **Responsive & Accessible Design**: Light/Dark theme switching with system detection and persistence, modern typography, semantic HTML, and zero bloated CSS dependencies.

---

## 🛠️ Local Development

### 1. Install dependencies
```bash
npm install
```

### 2. Start the dev server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### 3. Build & test static export
```bash
npm run build
```
The static HTML/CSS/JS export will be generated in the `./out` directory.

---

## 🌐 Deploying to GitHub Pages

1. **Create the GitHub Repository**:
   Create a new public repository on GitHub named `veasnawt.github.io` under your account (`veasnawt`).

2. **Configure GitHub Pages Source**:
   - Go to your repository on GitHub: `https://github.com/veasnawt/veasnawt.github.io/settings/pages`
   - Under **Build and deployment > Source**, select **GitHub Actions**.

3. **Push your code**:
   ```bash
   git add .
   git commit -m "Initial Next.js TypeScript site setup"
   git branch -M main
   git remote add origin https://github.com/veasnawt/veasnawt.github.io.git
   git push -u origin main
   ```

4. **Live Site**:
   The GitHub Actions workflow will trigger automatically and deploy your site to `https://veasnawt.github.io`.
