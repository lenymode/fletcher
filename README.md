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

For a production bundle:

```bash
npm run build
```

## Included routes

- `/` — primary homepage
- `/?home=dark`
- `/?home=grid`
- `/?home=mono`
- `/?home=magazine`
- `/?home=soft`
- `/?home=cinematic`
- `/shop`
- `/collections`
- `/product?id=veil-of-light`
- `/cart`
- `/checkout`
- `/about`
- `/journal`

The “Home designs” control in the main navigation opens a visual mega-menu using the retained mockups.

Cart state is stored locally for this front-end prototype. Checkout and products can later be connected to Shopify, WooCommerce, or the client’s existing commerce APIs.
# fletcher
