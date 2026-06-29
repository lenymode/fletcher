# J. Fletcher Art Storefront

A responsive multi-home storefront prototype based on the selected visual mockups.

## Styling files

- `src/styles/style.css` — editable base and desktop styles
- `src/styles/responsive.css` — responsive breakpoint and reduced-motion rules only

Do not edit CSS files inside `dist/assets`. They are generated and hashed automatically whenever the project is built.

## Run locally

```bash
npm install
npm run dev
```

The development server defaults to `http://localhost:5175`. It uses file polling
so it can still start when the machine's Linux file-watcher limit is already in
use by other development servers or editors.

For a production bundle:

```bash
npm run build
```

## Included routes

- `/` — Considered Spaces
- `/dark-gallery-home.html`
- `/modernist-grid-home.html`
- `/monochrome-portfolio-home.html`
- `/gallery-magazine-home.html`
- `/soft-contemporary-home.html`
- `/cinematic-panorama-home.html`
- `/shop`
- `/collections`
- `/product?id=veil-of-light`
- `/cart`
- `/checkout`
- `/about`
- `/journal`

Each homepage is a separate Vite page with its own HTML document, JavaScript
entry in `src/entries`, and CSS entry in `src/styles/pages`. Shared storefront
behavior remains in `src/main.js`, while shared visual rules remain in
`src/styles/style.css` and `src/styles/responsive.css`.

The “Home designs” control in the main navigation opens a visual mega-menu using the retained mockups.

Cart state is stored locally for this front-end prototype. Checkout and products can later be connected to Shopify, WooCommerce, or the client’s existing commerce APIs.
# fletcher
