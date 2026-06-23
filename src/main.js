import "./styles/style.css";
import "./styles/responsive.css";
import { homeConfig, homes, images, products } from "./data.js";

const app = document.querySelector("#app");
const PRINT_SIZES = ["A3", "A4", "A5"];
const DEFAULT_SHOP = { category: "All", colour: "All", sort: "featured", pageSize: 8, page: 1 };
const state = {
  cart: JSON.parse(localStorage.getItem("jf-cart") || "[]"),
  size: "A4",
  menuOpen: false,
  switcherOpen: false,
  galleryIndex: 0
};

const icon = (name) => {
  const paths = {
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c.7-5 3.4-7 8-7s7.3 2 8 7"/>',
    bag: '<path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/>',
    arrow: '<path d="M5 12h14M14 7l5 5-5 5"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    menu: '<path d="M3 7h18M3 12h18M3 17h18"/>',
    shield: '<path d="M12 2 4 5v6c0 5 3.4 9 8 11 4.6-2 8-6 8-11V5l-8-3Z"/><path d="m9 12 2 2 4-5"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>',
    award: '<circle cx="12" cy="9" r="6"/><path d="m8 14-2 8 6-3 6 3-2-8"/>'
  };
  return `<svg aria-hidden="true" viewBox="0 0 24 24">${paths[name]}</svg>`;
};

const currentRoute = () => {
  const path = location.pathname.replace(/\/+$/, "") || "/";
  const params = new URLSearchParams(location.search);
  return { path, home: params.get("home") || "primary" };
};

const navigate = (href) => {
  history.pushState({}, "", href);
  window.scrollTo({ top: 0, behavior: "smooth" });
  render();
};

const productGalleryImages = (product) => [
  product.image,
  images.interior,
  images.paper,
  images.mountain2,
  images.coast,
  images.architecture
];

const getShopState = () => {
  const params = new URLSearchParams(location.search);
  return {
    category: params.get("category") || DEFAULT_SHOP.category,
    colour: params.get("colour") || DEFAULT_SHOP.colour,
    sort: params.get("sort") || DEFAULT_SHOP.sort,
    pageSize: Number(params.get("pageSize")) || DEFAULT_SHOP.pageSize,
    page: Number(params.get("page")) || DEFAULT_SHOP.page
  };
};

const updateShop = (updates) => {
  const next = { ...getShopState(), ...updates };
  const params = new URLSearchParams();
  if (next.category !== DEFAULT_SHOP.category) params.set("category", next.category);
  if (next.colour !== DEFAULT_SHOP.colour) params.set("colour", next.colour);
  if (next.sort !== DEFAULT_SHOP.sort) params.set("sort", next.sort);
  if (Number(next.pageSize) !== DEFAULT_SHOP.pageSize) params.set("pageSize", String(next.pageSize));
  if (Number(next.page) !== DEFAULT_SHOP.page) params.set("page", String(next.page));
  navigate(`/shop${params.toString() ? `?${params}` : ""}`);
};

const filteredProducts = (shop) => {
  const list = products
    .filter(product => shop.category === "All" || product.category === shop.category)
    .filter(product => shop.colour === "All" || product.colour === shop.colour);

  return [...list].sort((a, b) => {
    if (shop.sort === "name-asc") return a.name.localeCompare(b.name);
    if (shop.sort === "name-desc") return b.name.localeCompare(a.name);
    if (shop.sort === "newest") return new Date(b.date) - new Date(a.date);
    return products.findIndex(product => product.id === a.id) - products.findIndex(product => product.id === b.id);
  });
};

const header = (theme = "primary") => `
  <div class="announcement">Complimentary worldwide shipping on orders over $250</div>
  <header class="site-header ${theme === "cinematic" ? "header-overlay" : ""}">
    <a class="brand" href="/?home=${theme}" data-link>J. FLETCHER ART</a>
    <button class="mobile-menu" data-menu aria-label="Toggle navigation">${icon("menu")}</button>
    <nav class="nav ${state.menuOpen ? "is-open" : ""}">
      <button class="home-switch-trigger" data-switcher>
        Home designs ${icon("arrow")}
      </button>
      <a href="/shop" data-link>Shop</a>
      <a href="/collections" data-link>Collections</a>
      <a href="/about" data-link>About</a>
      <a href="/journal" data-link>Journal</a>
    </nav>
    <div class="header-actions">
      <button aria-label="Search">${icon("search")}</button>
      <button aria-label="Account">${icon("user")}</button>
      <a href="/cart" data-link aria-label="Cart">${icon("bag")}<span class="cart-count">${state.cart.length}</span></a>
    </div>
  </header>
  ${homeSwitcher()}
`;

const homeSwitcher = () => `
  <div class="home-switcher ${state.switcherOpen ? "is-open" : ""}" aria-hidden="${!state.switcherOpen}">
    <div class="switcher-top">
      <div><span class="eyebrow">Explore the collection</span><h2>Choose a homepage</h2></div>
      <button data-switcher aria-label="Close homepage menu">${icon("close")}</button>
    </div>
    <div class="switcher-grid">
      ${homes.map(home => `
        <a href="/?home=${home.id}" data-link class="switcher-card">
          <span class="switcher-preview"><img src="${home.thumb}" alt="${home.title} homepage preview"></span>
          <strong>${home.title}</strong><span>View design ${icon("arrow")}</span>
        </a>
      `).join("")}
    </div>
  </div>
`;

const footer = () => `
  <section class="newsletter reveal">
    <div><span class="eyebrow">Private view</span><h2>Stay inspired</h2><p>New prints, stories and exclusive offers delivered thoughtfully.</p></div>
    <form><label class="sr-only" for="email">Email address</label><input id="email" type="email" placeholder="Enter your email address"><button class="button" type="submit">Subscribe</button></form>
  </section>
  <footer class="footer">
    <div class="footer-brand"><a class="brand" href="/" data-link>J. FLETCHER ART</a><p>Fine-art photography prints crafted for considered spaces.</p></div>
    <div><strong>Shop</strong><a href="/shop" data-link>All prints</a><a href="/collections" data-link>Landscapes</a><a href="/collections" data-link>Architecture</a><a href="/collections" data-link>Coastal</a></div>
    <div><strong>About</strong><a href="/about" data-link>Our story</a><a href="/about" data-link>Materials & quality</a><a href="/about" data-link>Framing guide</a></div>
    <div><strong>Customer care</strong><a href="/cart" data-link>Shipping & delivery</a><a href="/cart" data-link>Returns & exchanges</a><a href="/cart" data-link>Contact us</a></div>
    <small>© 2026 J. Fletcher Art. All rights reserved.</small>
  </footer>
`;

const productCard = (product, index = 0) => `
  <article class="product-card reveal" style="--delay:${index * 70}ms">
    <a class="product-image" href="/product?id=${product.id}" data-link><img src="${product.image}" alt="${product.name}" loading="lazy"></a>
    <div class="product-meta"><div><h3>${product.name}</h3><p>$${product.price}.00</p></div><span>Fine-art print</span></div>
    <div class="card-sizes">${PRINT_SIZES.map(size => `<button class="${state.size === size ? "active" : ""}" data-size="${size}">${size}</button>`).join("")}</div>
    <button class="button button-outline add-cart" data-add="${product.id}">Add to cart</button>
  </article>
`;

const trust = () => `
  <section class="trust">
    <div>${icon("shield")}<span><strong>Secure checkout</strong><small>Safe and encrypted payments.</small></span></div>
    <div>${icon("award")}<span><strong>Archival quality</strong><small>Museum-grade papers and inks.</small></span></div>
    <div>${icon("globe")}<span><strong>Worldwide delivery</strong><small>Carefully packaged and shipped.</small></span></div>
  </section>
`;

const sizeButtons = (className = "global-sizes") => `
  <div class="${className}">
    ${PRINT_SIZES.map(size => `<button class="${state.size === size ? "active" : ""}" data-size="${size}">${size}</button>`).join("")}
  </div>
`;

const collectionCard = (name, image, index) => `
  <a href="/collections" data-link class="collection-card reveal" style="--delay:${index * 80}ms">
    <img src="${image}" alt="${name}" loading="lazy">
    <span>${String(index + 1).padStart(2, "0")}</span>
    <h3>${name}</h3>${icon("arrow")}
  </a>
`;

const standardFeatured = (title = "Featured prints", className = "") => `
  <section class="featured section-pad ${className}">
    <div class="section-heading reveal"><span class="eyebrow">The edit</span><h2>${title}</h2><a href="/shop" class="text-link featured-see-all" data-link>See all ${icon("arrow")}</a>${sizeButtons()}</div>
    <div class="product-grid featured-grid">${products.slice(0, 8).map(productCard).join("")}</div>
  </section>
`;

const primaryHome = (config) => `
  <section class="hero hero-primary">
    <div class="hero-copy reveal"><span class="eyebrow">${config.eyebrow}</span><h1>${config.title}</h1><p>${config.copy}</p><a href="/shop" class="button" data-link>${config.cta} ${icon("arrow")}</a></div>
    <div class="hero-media"><img src="${config.hero}" alt="Mountain landscape fine-art photography"><div class="hero-wash"></div></div>
  </section>
  <section class="primary-categories">
    ${[["Landscapes", images.mountain], ["Architecture", images.architecture2], ["Coastal", images.coast2]].map(([name, image], index) => collectionCard(name, image, index)).join("")}
  </section>
  ${standardFeatured()}
  <section class="story split-section reveal"><div class="split-media"><img src="${images.interior}" alt="Framed landscape print in an interior" loading="lazy"></div><div class="split-copy"><span class="eyebrow">The story</span><h2>${config.storyTitle}</h2><p>J. Fletcher Art was founded on a love of light, form and place. Each photograph is captured with purpose and printed with meticulous care.</p><a href="/about" class="text-link" data-link>Learn more ${icon("arrow")}</a></div></section>
`;

const darkHome = (config) => `
  <section class="hero hero-dark">
    <div class="hero-copy reveal"><span class="eyebrow">${config.eyebrow}</span><h1>${config.title}</h1><p>${config.copy}</p><a href="/shop" class="button" data-link>${config.cta} ${icon("arrow")}</a></div>
    <div class="hero-media"><img src="${config.hero}" alt="Monochrome coastal landscape"><div class="hero-wash"></div></div>
  </section>
  <section class="dark-collections section-pad">
    <div class="dark-collection-intro reveal"><span class="eyebrow">Collections</span><h2>Explore by<br>collection</h2><a href="/collections" data-link>View all collections ${icon("arrow")}</a></div>
    <div class="dark-collection-mosaic">
      ${collectionCard("Landscapes", images.mountain, 0)}
      ${collectionCard("Architecture", images.architecture2, 1)}
      ${collectionCard("Coastal", images.coast2, 2)}
      ${collectionCard("Still life", images.paper, 3)}
      ${collectionCard("Trees & forests", images.forest, 4)}
    </div>
  </section>
  ${standardFeatured()}
  <section class="story split-section reveal"><div class="split-media"><img src="${images.interior}" alt="Dark styled interior" loading="lazy"></div><div class="split-copy"><span class="eyebrow">The art. The story.</span><h2>${config.storyTitle}</h2><p>Every photograph is created with a deep connection to light, place and moment, then printed using museum-grade materials.</p><a href="/about" class="text-link" data-link>Learn more ${icon("arrow")}</a></div></section>
`;

const gridHome = (config) => `
  <section class="hero hero-grid">
    <div class="hero-copy reveal"><span class="eyebrow">${config.eyebrow}</span><h1>Fine art.<br>Clear<br>perspective.</h1><p>${config.copy}</p><a href="/shop" class="button" data-link>${config.cta} ${icon("arrow")}</a><small class="scroll-cue">Scroll ↓</small></div>
    <div class="hero-media"><img src="${config.hero}" alt="Modern concrete architecture"></div>
  </section>
  <section class="grid-collections section-pad">
    <div class="collection-index reveal"><span class="eyebrow">Explore collections</span>${["Landscapes", "Architecture", "Coastal", "Abstract"].map((name, index) => `<a href="/collections" data-link><b>${String(index + 1).padStart(2, "0")}</b><span>${name}</span><i>+</i></a>`).join("")}<a class="view-all" href="/collections" data-link>View all collections ${icon("arrow")}</a></div>
    <div class="grid-collection-images">${[["Landscapes", images.mountain], ["Architecture", images.architecture2], ["Coastal", images.coast2]].map(([name, image], index) => collectionCard(name, image, index)).join("")}</div>
  </section>
  ${standardFeatured("Selected works", "grid-selected")}
  <section class="story split-section reveal"><div class="split-media"><img src="${images.interior}" alt="Framed architectural print" loading="lazy"></div><div class="split-copy"><span class="eyebrow">Made to last</span><h2>${config.storyTitle}</h2><p>Each photograph is printed using archival inks on museum-grade paper to ensure exceptional detail, stability and longevity.</p><a href="/about" class="text-link" data-link>Learn about our process ${icon("arrow")}</a></div></section>
  <section class="process-strip">${["Captured", "Curated", "Printed", "Delivered"].map((name, index) => `<div><b>0${index + 1}</b><strong>${name}</strong><small>Handled thoughtfully at every stage.</small></div>`).join("")}</section>
`;

const monoHome = (config) => `
  <section class="mono-hero">
    <div class="hero-copy reveal"><span class="eyebrow">${config.eyebrow}</span><h1>${config.title}</h1><p>${config.copy}</p><a href="/shop" class="button" data-link>${config.cta} ${icon("arrow")}</a></div>
    <div class="mono-collage"><img src="${images.architecture2}" alt="Architectural study"><img src="${images.mountain}" alt="Mountain study"><img src="${images.coast2}" alt="Coastal study"></div>
  </section>
  <section class="series-strip"><strong>Explore by series</strong>${[["Landscapes", images.mountain], ["Architecture", images.architecture], ["Coastal", images.coast2], ["Minimal", images.aerial], ["Abstract", images.architecture2], ["Ambient", images.forest]].map(([name, image], index) => `<a href="/collections" data-link class="${index === 0 ? "active" : ""}"><img src="${image}" alt=""><span>${name}</span></a>`).join("")}</section>
  ${standardFeatured()}
  <section class="mono-size-section"><div class="frames"><span class="frame frame-a3">A3</span><span class="frame frame-a4">A4</span><span class="frame frame-a5">A5</span></div><div><span class="eyebrow">Size guide</span><h2>Find the perfect fit</h2><p>All prints are available in three carefully considered sizes.</p>${PRINT_SIZES.map(size => `<p class="size-line"><b>${size}</b><span>${size === "A3" ? "29.7 × 42 cm" : size === "A4" ? "21 × 29.7 cm" : "14.8 × 21 cm"}</span></p>`).join("")}</div></section>
  <section class="mono-editorial"><div><span class="eyebrow">The artist</span><h2>${config.storyTitle}</h2><p>Each image is captured with purpose and printed with care.</p></div><img src="${images.mountain2}" alt="Mountain photograph"><div><span class="eyebrow">Material quality</span><h2>Museum-grade materials. Made to last.</h2><p>Archival inks, premium paper and careful hand finishing.</p></div><img src="${images.paper}" alt="Fine art paper"></section>
`;

const magazineHome = (config) => `
  <section class="magazine-hero">
    <div class="hero-copy reveal"><span class="eyebrow">${config.eyebrow}</span><h1>${config.title}</h1><p>${config.copy}</p><a href="/shop" class="button" data-link>${config.cta} ${icon("arrow")}</a></div>
    <div class="magazine-images"><img src="${images.architecture2}" alt="Curved architectural staircase"><img src="${images.mountain}" alt="Mountain artwork"><span>Art for<br>considered spaces</span></div>
  </section>
  <section class="magazine-collections section-pad"><div class="magazine-intro reveal"><span class="eyebrow">Collection stories</span><h2>${config.collectionTitle}</h2><a href="/collections" data-link>Explore all collections ${icon("arrow")}</a></div><div class="magazine-card-grid">${[["Wild landscapes", images.mountain], ["Architectural form", images.architecture], ["Coastal elements", images.coast2]].map(([name, image], index) => collectionCard(name, image, index)).join("")}</div></section>
  ${standardFeatured("Exceptional prints, made to last.")}
  <section class="magazine-editorial"><article><span class="eyebrow">From the journal</span><h2>The beauty of restraint</h2><p>On simplicity, negative space and letting the image speak.</p><a href="/journal" data-link>Read the article ${icon("arrow")}</a></article><img src="${images.aerial}" alt="Abstract landscape"><article class="dark-panel"><span class="eyebrow">Styled spaces</span><h2>Art that completes the space</h2><a href="/collections" data-link>Explore styled spaces ${icon("arrow")}</a></article><img src="${images.interior}" alt="Gallery wall"></section>
  <section class="story split-section reveal"><div class="split-media"><img src="${images.paper}" alt="Archival fine art print detail" loading="lazy"></div><div class="split-copy"><span class="eyebrow">Crafted with intention</span><h2>${config.storyTitle}</h2><p>Archival fine art paper, rich pigment inks and expert craftsmanship.</p></div></section>
`;

const softHome = (config) => `
  <section class="hero hero-soft"><div class="hero-copy reveal"><span class="eyebrow">${config.eyebrow}</span><h1>${config.title}</h1><p>${config.copy}</p><a href="/shop" class="button" data-link>${config.cta}</a><div class="hero-benefits"><span>◇ Museum quality</span><span>◎ Worldwide delivery</span><span>♙ Secure checkout</span></div></div><div class="hero-media"><img src="${config.hero}" alt="Soft aerial landscape"></div></section>
  <section class="filter-bar"><div><span>Filter by colour</span><i style="--c:#b3a48d"></i><i style="--c:#718077"></i><i style="--c:#5c7380"></i><i style="--c:#c9c8c5"></i><i style="--c:#343638"></i><i style="--c:#aa6f55"></i></div><div><span>Filter by subject</span><button>Landscapes</button><button>Coastal</button><button>Mountains</button><button>Architecture</button><button>Abstract</button></div></section>
  ${standardFeatured()}
  <section class="soft-inspiration split-section reveal"><div class="split-copy"><span class="eyebrow">Inspiration</span><h2>${config.collectionTitle}</h2><p>Prints designed to work beautifully alone or together.</p><a href="/collections" class="button" data-link>Explore collections</a></div><div class="split-media"><img src="${images.interior}" alt="Curated gallery wall"></div></section>
  <section class="choose-steps"><span class="eyebrow">How to choose</span><h2>Find the perfect print in three simple steps</h2><div>${["Choose your print", "Choose your size", "Style your space"].map((name, index) => `<article><b>${index + 1}</b><strong>${name}</strong><p>${index === 1 ? "Select A3, A4 or A5 — all prints share one uniform price." : "A simple, considered path to art that belongs in your space."}</p></article>`).join("")}</div></section>
  <section class="soft-quality"><article><span class="eyebrow">Crafted to last</span><h2>${config.storyTitle}</h2><p>Archival fine art paper, pigment inks and rich tonal clarity.</p></article><img src="${images.paper}" alt="Print quality detail"><article><span class="eyebrow">Our collectors love</span><h2>★★★★★</h2><blockquote>“The quality is breathtaking. The print brings such a sense of calm to my home.”</blockquote></article></section>
`;

const cinematicHome = (config) => `
  <section class="hero hero-cinematic"><div class="hero-copy reveal"><h1>${config.title}</h1><span class="cinematic-subtitle">${config.eyebrow}</span><a href="/shop" class="button" data-link>${config.cta} ${icon("arrow")}</a></div><div class="hero-media"><img src="${config.hero}" alt="Cinematic mountain panorama"></div></section>
  <section class="cinematic-collections section-pad"><div class="cinematic-rule"><span>Explore our collections</span></div><div class="collection-grid">${[["Wild landscapes", images.mountain], ["Architectural form", images.architecture], ["Coastal stories", images.coast2], ["Nature studies", images.forest]].map(([name, image], index) => collectionCard(name, image, index)).join("")}</div></section>
  ${standardFeatured()}
  <section class="limited-feature"><img src="${images.mountain}" alt="Summit Light limited edition"><div><span class="eyebrow">Limited edition</span><h2>Summit Light</h2><strong>$89.00</strong><p>A fleeting moment above the clouds, captured in the Italian Alps.</p>${sizeButtons("detail-sizes")}<button class="button add-cart" data-add="veil-of-light">Add to cart</button></div><ul><li>Museum quality</li><li>Limited editions</li><li>Made to order</li></ul></section>
  <section class="cinematic-size"><div><span class="eyebrow">Find your perfect fit</span><h2>See it. Love it. Live with it.</h2><a href="/product?id=veil-of-light" data-link>View size guide ${icon("arrow")}</a></div><div class="frames"><span class="frame frame-a3">A3</span><span class="frame frame-a4">A4</span><span class="frame frame-a5">A5</span></div></section>
  <section class="story split-section reveal"><div class="split-media"><img src="${images.mountain2}" alt="Valley landscape" loading="lazy"></div><div class="split-copy"><span class="eyebrow">Behind the lens</span><h2>${config.storyTitle}</h2><p>Fine-art landscape and architecture photography inspired by remote places and timeless shapes.</p><a href="/about" class="text-link" data-link>Read the story ${icon("arrow")}</a></div></section>
`;

const homePage = (id) => {
  const config = homeConfig[id] || homeConfig.primary;
  const layouts = { primary: primaryHome, dark: darkHome, grid: gridHome, mono: monoHome, magazine: magazineHome, soft: softHome, cinematic: cinematicHome };
  const layout = layouts[id] || primaryHome;
  return `
    <div class="site theme-${config.theme}">
      ${header(config.theme)}
      <main>
        ${layout(config)}
        ${trust()}
      </main>
      ${footer()}
    </div>`;
};

const pageHero = (eyebrow, title, copy) => `<section class="page-hero"><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${copy}</p></section>`;

const shopPage = () => {
  const shop = getShopState();
  const categories = ["All", ...new Set(products.map(product => product.category))];
  const colours = ["All", ...new Set(products.map(product => product.colour))];
  const sortedProducts = filteredProducts(shop);
  const pageCount = Math.max(1, Math.ceil(sortedProducts.length / shop.pageSize));
  const currentPage = Math.min(Math.max(shop.page, 1), pageCount);
  const start = (currentPage - 1) * shop.pageSize;
  const visibleProducts = sortedProducts.slice(start, start + shop.pageSize);
  const from = sortedProducts.length ? start + 1 : 0;
  const to = Math.min(start + shop.pageSize, sortedProducts.length);

  return `
  <div class="site theme-primary">${header()}<main>
    ${pageHero("The collection", "Fine-art prints for considered spaces", "Explore landscapes, architecture and coastal studies, printed in three carefully selected sizes.")}
    <section class="shop-tools">
      <p>Showing ${from}-${to} of ${sortedProducts.length} works</p>
      <div class="shop-controls">
        <label>Category
          <select data-shop-control="category">
            ${categories.map(category => `<option value="${category}" ${shop.category === category ? "selected" : ""}>${category}</option>`).join("")}
          </select>
        </label>
        <label>Colour
          <select data-shop-control="colour">
            ${colours.map(colour => `<option value="${colour}" ${shop.colour === colour ? "selected" : ""}>${colour}</option>`).join("")}
          </select>
        </label>
        <label>Sort by
          <select data-shop-control="sort">
            <option value="featured" ${shop.sort === "featured" ? "selected" : ""}>Featured</option>
            <option value="newest" ${shop.sort === "newest" ? "selected" : ""}>Newest</option>
            <option value="name-asc" ${shop.sort === "name-asc" ? "selected" : ""}>Name A-Z</option>
            <option value="name-desc" ${shop.sort === "name-desc" ? "selected" : ""}>Name Z-A</option>
          </select>
        </label>
        <label>Page size
          <select data-shop-control="pageSize">
            ${[4, 8, 12].map(size => `<option value="${size}" ${shop.pageSize === size ? "selected" : ""}>${size}</option>`).join("")}
          </select>
        </label>
        <button class="shop-reset" data-shop-reset>Reset</button>
      </div>
    </section>
    <section class="product-grid shop-grid section-pad">${visibleProducts.length ? visibleProducts.map(productCard).join("") : `<div class="empty-results"><h2>No prints found</h2><p>Try a different category or colour.</p><button class="button" data-shop-reset>Reset filters</button></div>`}</section>
    <nav class="pagination" aria-label="Shop pagination">
      <button ${currentPage === 1 ? "disabled" : ""} data-shop-page="${currentPage - 1}">Previous</button>
      ${Array.from({ length: pageCount }, (_, index) => `<button class="${currentPage === index + 1 ? "active" : ""}" data-shop-page="${index + 1}">${index + 1}</button>`).join("")}
      <button ${currentPage === pageCount ? "disabled" : ""} data-shop-page="${currentPage + 1}">Next</button>
    </nav>
  </main>${footer()}</div>`;
};

const productPage = () => {
  const id = new URLSearchParams(location.search).get("id");
  const product = products.find(item => item.id === id) || products[0];
  const gallery = productGalleryImages(product);
  const currentGalleryIndex = state.galleryIndex % gallery.length;
  const activeImage = gallery[currentGalleryIndex];
  const relatedProducts = products.filter(item => item.id !== product.id).slice(0, 4);
  return `<div class="site theme-primary">${header()}<main>
    <section class="product-detail">
      <div class="product-gallery">
        <div class="main-product-image"><img data-gallery-main src="${activeImage}" alt="${product.name}"></div>
        <div class="detail-slider" aria-label="${product.name} image gallery">
          <button class="slider-btn" data-gallery-prev aria-label="Previous image">‹</button>
          <div class="detail-thumbs">
            ${gallery.map((image, index) => `<button class="${index === currentGalleryIndex ? "active" : ""}" data-gallery-image="${index}" aria-label="View image ${index + 1}"><img src="${image}" alt="${product.name} preview ${index + 1}" loading="lazy"></button>`).join("")}
          </div>
          <button class="slider-btn" data-gallery-next aria-label="Next image">›</button>
        </div>
      </div>
      <div class="product-info">
        <span class="eyebrow">Limited photographic print</span><h1>${product.name}</h1><p class="price">$${product.price}.00</p>
        <p>A contemplative study of light, scale and atmosphere, produced as an archival fine-art print with exceptional tonal depth.</p>
        <div class="option"><strong>Select size</strong><div class="detail-sizes">${PRINT_SIZES.map(size => `<button class="${state.size === size ? "active" : ""}" data-size="${size}"><b>${size}</b><small>${size === "A3" ? "29.7 × 42 cm" : size === "A4" ? "21 × 29.7 cm" : "14.8 × 21 cm"}</small></button>`).join("")}</div></div>
        <button class="button add-cart" data-add="${product.id}">Add to cart</button>
        <ul class="product-notes"><li>Archival pigment inks</li><li>Premium museum-grade paper</li><li>Printed and inspected to order</li><li>Secure worldwide delivery</li></ul>
      </div>
    </section>
    <section class="section-pad related"><div class="section-heading"><span class="eyebrow">You may also like</span><h2>Related works</h2><a href="/shop" class="text-link" data-link>See all ${icon("arrow")}</a></div><div class="product-grid">${relatedProducts.map(productCard).join("")}</div></section>
    ${trust()}
  </main>${footer()}</div>`;
};

const collectionsPage = () => `<div class="site theme-primary">${header()}<main>
  ${pageHero("Browse by subject", "Collections", "Curated series built around place, form, atmosphere and light.")}
  <section class="collection-list section-pad">${[
    ["01", "Wild landscapes", images.mountain], ["02", "Architectural form", images.architecture],
    ["03", "Coastal elements", images.coast2], ["04", "Quiet forests", images.forest]
  ].map(([n,name,img]) => `<a href="/shop" data-link class="collection-row reveal"><span>${n}</span><h2>${name}</h2><img src="${img}" alt="${name}">${icon("arrow")}</a>`).join("")}</section>
</main>${footer()}</div>`;

const aboutPage = () => `<div class="site theme-primary">${header()}<main class="about-page">
  <section class="about-hero">
    <div class="about-hero-copy reveal"><span class="eyebrow">Our story</span><h1>Photography shaped by patient observation</h1><p>J. Fletcher Art creates enduring photographic works that bring atmosphere, clarity and a quiet sense of place into everyday spaces.</p></div>
    <div class="about-hero-image"><img src="${images.mountain2}" alt="Remote mountain landscape"></div>
  </section>

  <section class="about-intro section-pad reveal">
    <span class="section-number">01</span>
    <div><span class="eyebrow">Behind the lens</span><h2>Light, place and a slower way of seeing.</h2></div>
    <div><p>Every work begins with time spent looking—observing the rhythm of a landscape, the geometry of a building, or the brief moment when light changes everything.</p><p>The aim is not simply to document a place, but to distil the feeling of being there into an image that can live with you for years.</p></div>
  </section>

  <section class="about-manifesto">
    <img src="${images.coast2}" alt="Atmospheric coastline">
    <blockquote>“The photographs are quiet by design. They leave room for the viewer, and room for the space around them.”</blockquote>
    <img src="${images.architecture2}" alt="Minimal architectural study">
  </section>

  <section class="about-process section-pad">
    <div class="section-heading reveal"><span class="eyebrow">From field to frame</span><h2>A considered process</h2></div>
    <div class="about-process-grid">
      ${[
        ["01", "Observed", "Locations are explored patiently, often across changing seasons and shifting weather."],
        ["02", "Captured", "Compositions are made with attention to balance, atmosphere, scale and natural light."],
        ["03", "Refined", "Each image is carefully edited to preserve authentic texture, tone and visual depth."],
        ["04", "Printed", "Archival pigment inks and museum-grade paper produce exceptional detail and longevity."],
        ["05", "Inspected", "Every print is checked by hand before being signed, protected and carefully packed."],
        ["06", "Delivered", "Orders are securely shipped worldwide and arrive ready for considered framing."]
      ].map(([number, title, copy]) => `<article class="reveal"><b>${number}</b><h3>${title}</h3><p>${copy}</p></article>`).join("")}
    </div>
  </section>

  <section class="about-materials split-section reveal">
    <div class="split-media"><img src="${images.paper}" alt="Museum-grade fine art paper"></div>
    <div class="split-copy"><span class="eyebrow">Materials and quality</span><h2>Made carefully. Made to endure.</h2><p>Every photograph is printed using archival pigment inks on premium, acid-free fine-art paper selected for its subtle texture and tonal range.</p>
      <ul class="quality-list"><li>Archival pigment inks with rich, stable colour</li><li>Premium fine-art paper with a refined matte finish</li><li>Individually inspected and protected by hand</li><li>Produced in A3, A4 and A5 at one uniform price</li></ul>
      <a href="/product?id=veil-of-light" class="text-link" data-link>Explore print details ${icon("arrow")}</a>
    </div>
  </section>

  <section class="about-sizes section-pad">
    <div><span class="eyebrow">Three considered sizes</span><h2>Simple choices, consistent quality.</h2><p>The range is intentionally straightforward. Choose the scale that suits your room—every artwork is offered in A3, A4 and A5 without confusing paper or finish options.</p></div>
    <div class="about-size-table">
      <div><b>A3</b><span>29.7 × 42 cm</span><small>Statement scale</small></div>
      <div><b>A4</b><span>21 × 29.7 cm</span><small>Versatile scale</small></div>
      <div><b>A5</b><span>14.8 × 21 cm</span><small>Intimate scale</small></div>
    </div>
  </section>

  <section class="about-values">
    <article><span class="eyebrow">Purposeful</span><h3>Fewer, better choices</h3><p>A tightly edited collection, clear sizing and a calm buying experience.</p></article>
    <article><span class="eyebrow">Responsible</span><h3>Printed to order</h3><p>Thoughtful production reduces unnecessary stock, waste and handling.</p></article>
    <article><span class="eyebrow">Enduring</span><h3>Made for the long view</h3><p>Timeless imagery and archival materials intended to be enjoyed for generations.</p></article>
  </section>

  <section class="about-cta">
    <img src="${images.interior}" alt="Fine art photography displayed in an interior">
    <div><span class="eyebrow">The collection</span><h2>Find a work that belongs in your space.</h2><a href="/shop" class="button" data-link>Explore all prints ${icon("arrow")}</a></div>
  </section>
  ${trust()}
</main>${footer()}</div>`;

const journalArticles = [
  { category: "Inspiration", title: "The beauty of restraint", excerpt: "On simplicity, negative space and allowing an image to speak without noise.", image: images.aerial, date: "18 June 2026" },
  { category: "Behind the lens", title: "Waiting for weather", excerpt: "Why atmosphere, uncertainty and patience remain central to the photographic process.", image: images.mountain, date: "02 June 2026" },
  { category: "Print guide", title: "Choosing between A3, A4 and A5", excerpt: "A practical guide to scale, placement and building a considered gallery wall.", image: images.interior, date: "21 May 2026" },
  { category: "Architecture", title: "Where shadow becomes form", excerpt: "Finding rhythm and stillness in concrete, curves and carefully controlled light.", image: images.architecture2, date: "09 May 2026" },
  { category: "Field notes", title: "At the edge of the land", excerpt: "Notes from a wind-shaped coastline and the making of a new coastal series.", image: images.coast2, date: "27 April 2026" },
  { category: "Materials", title: "Why archival paper matters", excerpt: "The surface, weight and longevity behind every J. Fletcher Art print.", image: images.paper, date: "11 April 2026" }
];

const journalPage = () => `<div class="site theme-primary">${header()}<main class="journal-page">
  <section class="journal-heading section-pad"><span class="eyebrow">Stories from the field</span><h1>Journal</h1><p>Notes on place, process, composition and the quiet details behind each image.</p></section>

  <section class="journal-feature reveal">
    <div class="journal-feature-image"><img src="${images.coast}" alt="Quiet coastline at dusk"></div>
    <article><span class="eyebrow">Featured story · Field notes</span><h2>The long way to a quiet image</h2><p>A photograph may take a fraction of a second to make, but the work behind it can involve days of walking, looking, returning and waiting for a place to reveal its rhythm.</p><div class="article-meta"><span>12 min read</span><span>23 June 2026</span></div><a href="#journal-stories" class="text-link">Read the story ${icon("arrow")}</a></article>
  </section>

  <nav class="journal-filter" aria-label="Journal categories"><button class="active">All stories</button><button>Field notes</button><button>Behind the lens</button><button>Inspiration</button><button>Print guides</button></nav>

  <section id="journal-stories" class="journal-stories section-pad">
    <div class="section-heading"><span class="eyebrow">Latest stories</span><h2>Ideas, places and process</h2></div>
    <div class="journal-grid">${journalArticles.map((article, index) => `<article class="journal-card reveal" style="--delay:${index * 65}ms"><a href="#journal-stories" class="journal-card-image"><img src="${article.image}" alt="${article.title}" loading="lazy"></a><div><span class="eyebrow">${article.category}</span><h3>${article.title}</h3><p>${article.excerpt}</p><footer><time>${article.date}</time><a href="#journal-stories" aria-label="Read ${article.title}">${icon("arrow")}</a></footer></div></article>`).join("")}</div>
  </section>

  <section class="journal-essay">
    <div><span class="eyebrow">Field note 018</span><h2>“The best light often arrives after you have decided nothing is going to happen.”</h2><p>South coast, winter. A final clearing in the weather and three minutes of soft light across the water.</p></div>
    <img src="${images.coast2}" alt="Winter coastline field note">
  </section>

  <section class="journal-guides section-pad">
    <div class="section-heading"><span class="eyebrow">Useful guides</span><h2>Living with photographic art</h2></div>
    <div class="guide-grid">
      <a href="/product?id=veil-of-light" data-link><b>01</b><h3>How to choose your print size</h3><span>A3, A4 and A5 explained ${icon("arrow")}</span></a>
      <a href="/collections" data-link><b>02</b><h3>Building a balanced gallery wall</h3><span>Composition and spacing ${icon("arrow")}</span></a>
      <a href="/about" data-link><b>03</b><h3>Caring for archival fine-art prints</h3><span>Handling and longevity ${icon("arrow")}</span></a>
    </div>
  </section>
</main>${footer()}</div>`;

const cartPage = () => {
  const cartProducts = state.cart.map(id => products.find(p => p.id === id)).filter(Boolean);
  const total = cartProducts.reduce((sum, item) => sum + item.price, 0);
  return `<div class="site theme-primary">${header()}<main>
    ${pageHero("Your selection", "Shopping cart", cartProducts.length ? "Your selected works are reserved while you complete checkout." : "Your cart is ready for something beautiful.")}
    <section class="cart-layout section-pad">
      <div class="cart-items">${cartProducts.length ? cartProducts.map((p,i) => `<article class="cart-item"><img src="${p.image}" alt="${p.name}"><div><h3>${p.name}</h3><p>${state.size} · Fine-art print</p><button data-remove="${i}">Remove</button></div><strong>$${p.price}.00</strong></article>`).join("") : `<div class="empty-cart"><h2>Your cart is empty</h2><a class="button" href="/shop" data-link>Explore prints</a></div>`}</div>
      <aside class="cart-summary"><h2>Order summary</h2><p><span>Subtotal</span><strong>$${total}.00</strong></p><p><span>Delivery</span><span>Calculated at checkout</span></p><div class="summary-total"><span>Total</span><strong>$${total}.00</strong></div><a href="/checkout" class="button ${!cartProducts.length ? "disabled" : ""}" data-link>Secure checkout</a><small>Taxes and delivery calculated at checkout.</small></aside>
    </section>
  </main>${footer()}</div>`;
};

const checkoutPage = () => `<div class="site theme-primary">${header()}<main>
  ${pageHero("Secure checkout", "Complete your order", "Checkout interface preview — connect this form to the client’s existing payment provider during integration.")}
  <section class="checkout-layout section-pad">
    <form class="checkout-form"><h2>Contact</h2><input type="email" placeholder="Email address"><h2>Delivery</h2><div class="form-grid"><input placeholder="First name"><input placeholder="Last name"><input class="wide" placeholder="Address"><input placeholder="City"><input placeholder="Postcode"><select><option>Australia</option><option>United States</option><option>United Kingdom</option></select></div><h2>Payment</h2><div class="payment-placeholder">${icon("shield")}<p>Secure payment integration connects here.</p></div><button class="button" type="button">Pay securely</button></form>
    <aside class="checkout-summary">${state.cart.map(id => products.find(p => p.id === id)).filter(Boolean).map(p => `<div><img src="${p.image}" alt=""><span><strong>${p.name}</strong><small>${state.size}</small></span><b>$${p.price}.00</b></div>`).join("") || "<p>No products selected.</p>"}</aside>
  </section>
</main>${footer()}</div>`;

const render = () => {
  const { path, home } = currentRoute();
  state.menuOpen = false;
  state.switcherOpen = false;
  if (path === "/shop") app.innerHTML = shopPage();
  else if (path === "/product") app.innerHTML = productPage();
  else if (path === "/collections") app.innerHTML = collectionsPage();
  else if (path === "/about") app.innerHTML = aboutPage();
  else if (path === "/journal") app.innerHTML = journalPage();
  else if (path === "/cart") app.innerHTML = cartPage();
  else if (path === "/checkout") app.innerHTML = checkoutPage();
  else app.innerHTML = homePage(home);
  observeReveals();
};

const observeReveals = () => {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
  }), { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
};

document.addEventListener("click", event => {
  const link = event.target.closest("[data-link]");
  if (link) { event.preventDefault(); navigate(link.getAttribute("href")); return; }
  const shopPageButton = event.target.closest("[data-shop-page]");
  if (shopPageButton) { updateShop({ page: Number(shopPageButton.dataset.shopPage) }); return; }
  if (event.target.closest("[data-shop-reset]")) { navigate("/shop"); return; }
  const galleryImage = event.target.closest("[data-gallery-image]");
  if (galleryImage) { state.galleryIndex = Number(galleryImage.dataset.galleryImage); render(); return; }
  if (event.target.closest("[data-gallery-prev]")) {
    const count = document.querySelectorAll("[data-gallery-image]").length || 1;
    state.galleryIndex = (state.galleryIndex - 1 + count) % count;
    render();
    return;
  }
  if (event.target.closest("[data-gallery-next]")) {
    const count = document.querySelectorAll("[data-gallery-image]").length || 1;
    state.galleryIndex = (state.galleryIndex + 1) % count;
    render();
    return;
  }
  if (event.target.closest("[data-switcher]")) {
    state.switcherOpen = !state.switcherOpen;
    document.querySelector(".home-switcher")?.classList.toggle("is-open", state.switcherOpen);
    return;
  }
  if (event.target.closest("[data-menu]")) {
    state.menuOpen = !state.menuOpen;
    document.querySelector(".nav")?.classList.toggle("is-open", state.menuOpen);
    return;
  }
  const size = event.target.closest("[data-size]")?.dataset.size;
  if (size) { state.size = size; render(); return; }
  const add = event.target.closest("[data-add]")?.dataset.add;
  if (add) { state.cart.push(add); localStorage.setItem("jf-cart", JSON.stringify(state.cart)); render(); return; }
  const remove = event.target.closest("[data-remove]")?.dataset.remove;
  if (remove !== undefined) { state.cart.splice(Number(remove), 1); localStorage.setItem("jf-cart", JSON.stringify(state.cart)); render(); }
});

document.addEventListener("change", event => {
  const control = event.target.closest("[data-shop-control]");
  if (!control) return;
  const key = control.dataset.shopControl;
  const value = key === "pageSize" ? Number(control.value) : control.value;
  updateShop({ [key]: value, page: 1 });
});

document.addEventListener("submit", event => {
  event.preventDefault();
  event.target.reset();
});

window.addEventListener("popstate", render);
render();
