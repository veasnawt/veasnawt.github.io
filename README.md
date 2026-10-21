# Veasna · Developer Portfolio

[**veasnawt.com**](https://veasnawt.com) · [GitHub](https://github.com/veasnawt)

The source for my personal portfolio: a curated look at the apps, systems research, and open-source tools I'm building. The site deliberately highlights a small selection of substantial projects instead of listing every experiment.

Built with **Next.js**, **React**, **TypeScript**, and **CSS Modules**. Deployed as a static site to **GitHub Pages**, with [veasnawt.com](https://veasnawt.com) as the custom domain.

## Selected projects

| Project | What it is | Current status | Explore |
| --- | --- | --- | --- |
| **VOS** | An independent, from-scratch x86-64 operating-system kernel, written primarily in freestanding C and assembly | Pre-alpha research, tested in QEMU | [Source](https://github.com/veasnawt/vos) |
| **Pinly** | Location-based social discovery, with content pinned to places and discovered by map or camera | Published Android app | [Google Play](https://play.google.com/store/apps/details?id=com.veasnawt.pinly) |
| **VCut** | Video editor with multi-track timeline, keyframes, and export workflows | Public beta | [Website](https://vcut.io/) |
| **VBoard** | Android keyboard for typing Khmer from Latin phonetics and shortcuts | Published Android app | [Google Play](https://play.google.com/store/apps/details?id=com.veasnawt.vboard) |
| **VIcons** | React SVG icon library with 145+ icons and TypeScript support | Open-source package | [Source](https://github.com/veasnawt/vicons) · [Docs](https://veasnawt.com/vicons/) |
| **Veasna OS Universe** | Experimental desktop-style creative environment built with web technologies and Electron | Prototype | [Source](https://github.com/veasnawt/veasna-os) |

> **Two distinct OS projects:** VOS is the real kernel project; it is not yet an installable, everyday-use desktop OS. Veasna OS Universe is a separate web/Electron desktop prototype and does **not** run on the VOS kernel.

The full project list, descriptions, and links shown on the website are maintained in [`src/data/projects.ts`](src/data/projects.ts). Project status is intentional: research, beta software, published apps, and prototypes are not interchangeable labels.

## Portfolio features

- **Curated project cards** with status labels, technology tags, expandable descriptions, and links to public code or products.
- **Interactive developer terminal** with commands including `help`, `whoami`, `projects`, `skills`, `contact`, `date`, and `clear`.
- **Responsive layout** with light and dark themes.
- **Static export** compatible with GitHub Pages, including no-Jekyll processing for Next.js assets.
- **Public contact links** via GitHub. The site does not pretend to send messages from a form without a backend.

## Run locally

Use **Node.js 20.9+** (Node.js 22 is a good choice) and npm.

~~~bash
git clone https://github.com/veasnawt/veasnawt.github.io.git
cd veasnawt.github.io
npm ci
npm run dev
~~~

Visit [http://localhost:3000](http://localhost:3000).

### Validate changes

~~~bash
npm run lint
npm run build
~~~

The build command runs `next build` followed by [`scripts/postbuild.js`](scripts/postbuild.js), which preserves compatibility for existing privacy-page URLs. The static output is written to `out/`.

## Repository guide

| Path | Purpose |
| --- | --- |
| [`src/data/projects.ts`](src/data/projects.ts) | Selected projects, descriptions, status, and external links |
| [`src/data/skills.ts`](src/data/skills.ts) | Technical focus and skills content |
| [`src/components/`](src/components/) | Hero, projects, terminal, contact, navigation, and other sections |
| [`src/app/`](src/app/) | Next.js App Router pages, layout, and metadata |
| [`next.config.ts`](next.config.ts) | Static export, trailing slashes, and image configuration |
| [`CNAME`](CNAME) | GitHub Pages custom domain |
| [`.github/workflows/verify.yml`](.github/workflows/verify.yml) | Pull-request lint and build checks |
| [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) | Production deployment to GitHub Pages |

## Deploy

The website is hosted on GitHub Pages at **[https://veasnawt.com](https://veasnawt.com)**.

1. Open a pull request against `main`. The **Verify portfolio** workflow runs `npm ci`, `npm run lint`, and `npm run build`.
2. Review the change and make sure the checks pass.
3. Merge into `main` to trigger [the GitHub Pages deployment workflow](.github/workflows/deploy.yml). It builds the site and publishes the `out/` artifact.
4. GitHub Pages is configured to use **GitHub Actions** as its source, with **veasnawt.com** as its custom domain. DNS records are managed separately at the domain provider.

The [`CNAME`](CNAME) file contains `veasnawt.com`. Do not replace it with the old `veasnawt.github.io` address. For troubleshooting, see [GitHub Pages settings](https://github.com/veasnawt/veasnawt.github.io/settings/pages) and the [Actions runs](https://github.com/veasnawt/veasnawt.github.io/actions).

## Updating the portfolio

A good portfolio shows **real work and its current state**, not an inflated project count.

- Add or edit a selected project in [`src/data/projects.ts`](src/data/projects.ts). Use verifiable claims and working URLs.
- Keep kernel research separate from desktop prototypes. Don't present planned features as shipped.
- Update [`src/data/skills.ts`](src/data/skills.ts) when the actual technical focus changes.
- Run lint and the production build, then submit a pull request.

For site feedback or public collaboration inquiries, [open an issue](https://github.com/veasnawt/veasnawt.github.io/issues/new). **Issues are public**, so please don't include secrets or private information.

---

Made by [Veasna (@veasnawt)](https://github.com/veasnawt).
