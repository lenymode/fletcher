(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(r){if(r.ep)return;r.ep=!0;const l=s(r);fetch(r.href,l)}})();const t={mountain:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=86",mountain2:"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=86",coast:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=86",coast2:"https://images.unsplash.com/photo-1498623116890-37e912163d5d?auto=format&fit=crop&w=1600&q=86",architecture:"https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=86",architecture2:"https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=86",forest:"https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=86",desert:"https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1600&q=86",aerial:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1800&q=86",interior:"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=86",paper:"https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=1400&q=84",portrait:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&h=1500&q=88",urban:"https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1800&q=86",objects:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=86",categoryLandscape:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=88",categoryUrban:"https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=1600&q=88",categoryArchitecture:"https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=1400&q=88",categoryNature:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=88",categoryObjects:"https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1400&q=88"},p=[{id:"veil-of-light",name:"Veil of Light",price:89,image:t.mountain,category:"Landscapes",colour:"Blue",date:"2026-06-01"},{id:"silent-geometry",name:"Silent Geometry",price:89,image:t.architecture2,category:"Architecture",colour:"Neutral",date:"2026-05-22"},{id:"edge-of-the-land",name:"Edge of the Land",price:89,image:t.coast2,category:"Coastal",colour:"Blue",date:"2026-05-12"},{id:"parallel-lines",name:"Parallel Lines",price:89,image:t.architecture,category:"Architecture",colour:"Neutral",date:"2026-04-28"},{id:"forest-study",name:"Forest Study",price:89,image:t.forest,category:"Forests",colour:"Green",date:"2026-04-16"},{id:"dune-shadows",name:"Dune Shadows",price:89,image:t.desert,category:"Landscapes",colour:"Warm",date:"2026-04-02"},{id:"still-water",name:"Still Water",price:89,image:t.aerial,category:"Abstract",colour:"Green",date:"2026-03-18"},{id:"quiet-room",name:"Quiet Room",price:89,image:t.interior,category:"Interiors",colour:"Warm",date:"2026-03-04"}],q=[{id:"primary",title:"Considered Spaces",href:"/",thumb:"/mockups/j-fletcher-art-homepage-concept.png"},{id:"dark",title:"Dark Gallery",href:"/dark-gallery-home.html",thumb:"/mockups/j-fletcher-art-02-dark-gallery.png"},{id:"grid",title:"Modernist Grid",href:"/modernist-grid-home.html",thumb:"/mockups/j-fletcher-art-04-modernist-grid.png"},{id:"mono",title:"Monochrome Portfolio",href:"/monochrome-portfolio-home.html",thumb:"/mockups/j-fletcher-art-06-monochrome-portfolio.png"},{id:"magazine",title:"Gallery Magazine",href:"/gallery-magazine-home.html",thumb:"/mockups/j-fletcher-art-08-gallery-magazine.png"},{id:"soft",title:"Soft Contemporary",href:"/soft-contemporary-home.html",thumb:"/mockups/j-fletcher-art-09-soft-contemporary.png"},{id:"cinematic",title:"Cinematic Panorama",href:"/cinematic-panorama-home.html",thumb:"/mockups/j-fletcher-art-10-cinematic-panorama.png"}],N={primary:{eyebrow:"Fine-art photography prints",title:"Photography for considered spaces",copy:"Fine-art prints that bring clarity, atmosphere and quiet beauty to your home or workspace.",cta:"Shop the collection",hero:t.mountain,theme:"primary",collectionTitle:"Explore the collection",storyTitle:"Intentional imagery. Timeless expression."},dark:{eyebrow:"Fine-art photography prints",title:"Art shaped by light and place",copy:"Fine-art photographic prints, crafted with purpose and printed to last a lifetime.",cta:"Explore the prints",hero:t.forest,theme:"dark",collectionTitle:"Explore by collection",storyTitle:"Intentional imagery. Timeless expression."},grid:{eyebrow:"Fine art photography prints",title:"Fine art. Clear perspective.",copy:"Thoughtful photography for modern spaces. Printed to museum-grade standards.",cta:"View new releases",hero:t.architecture,theme:"grid",collectionTitle:"Explore collections",storyTitle:"Captured with intention. Printed to endure."},mono:{eyebrow:"Fine-art photography prints",title:"Images with room to breathe",copy:"Fine-art photography prints for contemporary spaces. Timeless imagery, considered details.",cta:"Shop all prints",hero:t.mountain2,theme:"mono",collectionTitle:"Explore by series",storyTitle:"Photography shaped by place, light and intention."},magazine:{eyebrow:"Fine art photography prints",title:"A different way of seeing",copy:"Thoughtful imagery. Timeless expression. Beautifully crafted for considered spaces.",cta:"Discover new work",hero:t.architecture2,theme:"magazine",collectionTitle:"Curated themes. Endless inspiration.",storyTitle:"Museum quality. Made to endure."},soft:{eyebrow:"Curated photography. Timeless spaces.",title:"Quiet art for everyday living",copy:"Thoughtful photographic prints created to bring calm, beauty and meaning to your home.",cta:"Find your print",hero:t.aerial,theme:"soft",collectionTitle:"Curate your space",storyTitle:"Museum quality in every detail."},cinematic:{eyebrow:"Fine art photography prints for considered spaces",title:"The world, framed",copy:"Limited photographic works shaped by wilderness, architecture and extraordinary light.",cta:"Explore prints",hero:t.mountain2,theme:"cinematic",collectionTitle:"Explore our collections",storyTitle:"Crafted by passion. Guided by light."}},f=document.querySelector("#app"),A=["A3","A4","A5"],m={category:"All",colour:"All",sort:"featured",pageSize:8,page:1},n={cart:JSON.parse(localStorage.getItem("jf-cart")||"[]"),size:"A4",menuOpen:!1,switcherOpen:!1,galleryIndex:0},o=e=>`<svg aria-hidden="true" viewBox="0 0 24 24">${{search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c.7-5 3.4-7 8-7s7.3 2 8 7"/>',bag:'<path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/>',arrow:'<path d="M5 12h14M14 7l5 5-5 5"/>',close:'<path d="m6 6 12 12M18 6 6 18"/>',menu:'<path d="M3 7h18M3 12h18M3 17h18"/>',shield:'<path d="M12 2 4 5v6c0 5 3.4 9 8 11 4.6-2 8-6 8-11V5l-8-3Z"/><path d="m9 12 2 2 4-5"/>',globe:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>',award:'<circle cx="12" cy="9" r="6"/><path d="m8 14-2 8 6-3 6 3-2-8"/>'}[e]}</svg>`,D=()=>{const e=location.pathname.replace(/\/+$/,"")||"/",a=new URLSearchParams(location.search),s=q.find(r=>r.href===`${e==="/"?"/":e}`),i=a.get("home");return{path:e,home:(s==null?void 0:s.id)||i||document.body.dataset.homePage||"primary"}},z=e=>{var a;return((a=q.find(s=>s.id===e))==null?void 0:a.href)||"/"},C=e=>{history.pushState({},"",e),y();const a=new URL(e,location.origin).hash,s=a?document.querySelector(a):null;s?s.scrollIntoView({behavior:"smooth",block:"start"}):window.scrollTo({top:0,behavior:"smooth"})},U=e=>[e.image,t.interior,t.paper,t.mountain2,t.coast,t.architecture],R=()=>{const e=new URLSearchParams(location.search);return{category:e.get("category")||m.category,colour:e.get("colour")||m.colour,sort:e.get("sort")||m.sort,pageSize:Number(e.get("pageSize"))||m.pageSize,page:Number(e.get("page"))||m.page}},B=e=>{const a={...R(),...e},s=new URLSearchParams;a.category!==m.category&&s.set("category",a.category),a.colour!==m.colour&&s.set("colour",a.colour),a.sort!==m.sort&&s.set("sort",a.sort),Number(a.pageSize)!==m.pageSize&&s.set("pageSize",String(a.pageSize)),Number(a.page)!==m.page&&s.set("page",String(a.page)),C(`/shop${s.toString()?`?${s}`:""}`)},J=e=>[...p.filter(s=>e.category==="All"||s.category===e.category).filter(s=>e.colour==="All"||s.colour===e.colour)].sort((s,i)=>e.sort==="name-asc"?s.name.localeCompare(i.name):e.sort==="name-desc"?i.name.localeCompare(s.name):e.sort==="newest"?new Date(i.date)-new Date(s.date):p.findIndex(r=>r.id===s.id)-p.findIndex(r=>r.id===i.id)),v=(e="primary")=>`
  <div class="announcement">Complimentary worldwide shipping on orders over $250</div>
  <header class="site-header ${e==="cinematic"?"header-overlay":""}">
    <a class="brand" href="${z(e)}" data-link>J. FLETCHER ART</a>
    <button class="mobile-menu" data-menu aria-label="Toggle navigation">${o("menu")}</button>
    <nav class="nav ${n.menuOpen?"is-open":""}">
      <button class="home-switch-trigger" data-switcher>
        Home designs ${o("arrow")}
      </button>
      <a href="/shop" data-link>Shop</a>
      <a href="/collections" data-link>Collections</a>
      <a href="/about" data-link>About</a>
      <a href="/journal" data-link>Journal</a>
    </nav>
    <div class="header-actions">
      <button aria-label="Search">${o("search")}</button>
      <button aria-label="Account">${o("user")}</button>
      <a href="/cart" data-link aria-label="Cart">${o("bag")}<span class="cart-count">${n.cart.length}</span></a>
    </div>
  </header>
  ${W()}
`,W=()=>`
  <div class="home-switcher ${n.switcherOpen?"is-open":""}" aria-hidden="${!n.switcherOpen}">
    <div class="switcher-top">
      <div><span class="eyebrow">Explore the collection</span><h2>Choose a homepage</h2></div>
      <button data-switcher aria-label="Close homepage menu">${o("close")}</button>
    </div>
    <div class="switcher-grid">
      ${q.map(e=>`
        <a href="${e.href}" data-link class="switcher-card">
          <span class="switcher-preview"><img src="${e.thumb}" alt="${e.title} homepage preview"></span>
          <strong>${e.title}</strong><span>View design ${o("arrow")}</span>
        </a>
      `).join("")}
    </div>
  </div>
`,b=(e="primary")=>{const a={primary:t.coast,dark:t.forest,grid:t.architecture,mono:t.architecture2,magazine:t.aerial,soft:t.interior,cinematic:t.mountain2};return`
  <section class="newsletter reveal">
    <div><span class="eyebrow">Private view</span><h2>Stay inspired</h2><p>New prints, stories and exclusive offers delivered thoughtfully.</p></div>
    <form><label class="sr-only" for="email">Email address</label><input id="email" type="email" placeholder="Enter your email address"><button class="button" type="submit">Subscribe</button></form>
  </section>
  <footer class="footer footer-${e}" style="--footer-image:url('${a[e]||a.primary}')">
    <div class="footer-topline"><span>Fine-art photography</span><span>Worldwide delivery</span></div>
    <div class="footer-brand"><a class="brand" href="${z(e)}" data-link>J. FLETCHER<br>ART</a><p>Quiet images, thoughtfully printed for the spaces where life happens.</p></div>
    <div class="footer-links"><strong>Shop</strong><a href="/shop" data-link>All prints</a><a href="/collections" data-link>Landscapes</a><a href="/collections" data-link>Architecture</a><a href="/collections" data-link>Coastal</a></div>
    <div class="footer-links"><strong>Studio</strong><a href="/about" data-link>Our story</a><a href="/about" data-link>Materials & quality</a><a href="/journal" data-link>Journal</a></div>
    <div class="footer-links"><strong>Customer care</strong><a href="${z(e)}#contact" data-link>Contact us</a><a href="/cart" data-link>Shipping & delivery</a><a href="/cart" data-link>Returns & exchanges</a></div>
    <small>© 2026 J. Fletcher Art. All rights reserved.</small>
  </footer>
`},L=(e,a=0)=>`
  <article class="product-card reveal" style="--delay:${a*70}ms">
    <a class="product-image" href="/product?id=${e.id}" data-link><img src="${e.image}" alt="${e.name}" loading="lazy"></a>
    <div class="product-meta"><div><h3>${e.name}</h3><p>$${e.price}.00</p></div><span>Fine-art print</span></div>
    <div class="card-sizes">${A.map(s=>`<button class="${n.size===s?"active":""}" data-size="${s}">${s}</button>`).join("")}</div>
    <button class="button button-outline add-cart" data-add="${e.id}">Add to cart</button>
  </article>
`,M=()=>`
  <section class="trust">
    <div>${o("shield")}<span><strong>Secure checkout</strong><small>Safe and encrypted payments.</small></span></div>
    <div>${o("award")}<span><strong>Archival quality</strong><small>Museum-grade papers and inks.</small></span></div>
    <div>${o("globe")}<span><strong>Worldwide delivery</strong><small>Carefully packaged and shipped.</small></span></div>
  </section>
`,E=(e="global-sizes")=>`
  <div class="${e}">
    ${A.map(a=>`<button class="${n.size===a?"active":""}" data-size="${a}">${a}</button>`).join("")}
  </div>
`,h=(e,a,s)=>`
  <a href="/collections" data-link class="collection-card reveal" style="--delay:${s*80}ms">
    <img src="${a}" alt="${e}" loading="lazy">
    <span>${String(s+1).padStart(2,"0")}</span>
    <h3>${e}</h3><small>Explore</small>${o("arrow")}
  </a>
`,$=(e="Featured prints",a="")=>`
  <section class="featured section-pad ${a}">
    <div class="section-heading reveal"><span class="eyebrow">The edit</span><h2>${e}</h2><a href="/shop" class="text-link featured-see-all" data-link>See All Photographs ${o("arrow")}</a>${E()}</div>
    <div class="product-grid featured-grid">${p.slice(0,8).map(L).join("")}</div>
  </section>
`,w=(e,a)=>{const s=[...e,e[0]];return`
    <div class="hero-media hero-slider" aria-label="${a}">
      <div class="hero-slider-track">
        ${s.map((i,r)=>`<img src="${i}" alt="${r<e.length?`${a}, view ${r+1}`:""}" ${r?'loading="eager"':""}>`).join("")}
      </div>
      <div class="hero-slider-progress" aria-label="${a} slide navigation">
        ${e.map((i,r)=>`
          <button
            type="button"
            class="${r===0?"is-active":""}"
            data-hero-slide="${r}"
            aria-label="Show image ${r+1} of ${e.length}"
            aria-current="${r===0?"true":"false"}"
          ><b>0${r+1}</b></button>
        `).join("")}
      </div>
    </div>
  `},V=e=>{const a={primary:0,dark:4,grid:1,mono:3,magazine:6,soft:7,cinematic:5},s=p[a[e]??0];return`
    <section class="highlight-product highlight-${e} section-pad reveal">
      <div class="highlight-media"><img src="${s.image}" alt="${s.name} featured photograph" loading="lazy"></div>
      <div class="highlight-copy">
        <span class="highlight-number">0${(a[e]??0)+1}</span>
        <span class="eyebrow">${e==="cinematic"?"The featured edition":"Highlight photograph"}</span>
        <h2>${s.name}</h2>
        <p class="price">$${s.price}.00</p>
        <p>A signature fine-art landscape print selected for its quiet atmosphere, tonal depth and easy presence in considered interiors.</p>
        <dl>
          <div><dt>Category</dt><dd>${s.category}</dd></div>
          <div><dt>Sizes</dt><dd>${A.join(", ")}</dd></div>
          <div><dt>Finish</dt><dd>Archival pigment print</dd></div>
        </dl>
        <div class="highlight-actions">${E("detail-sizes")}<a href="/product?id=${s.id}" class="button" data-link>View details ${o("arrow")}</a></div>
      </div>
    </section>
  `},P=[{quote:"The print has completely changed the atmosphere of our living room. It feels quiet, expansive and beautifully made.",name:"Amelia Hart",place:"London",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&h=750&q=88"},{quote:"The paper and tonal detail are exceptional. Even the packaging felt like opening something truly considered.",name:"Nora Williams",place:"Copenhagen",image:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=600&h=750&q=88"},{quote:"A timeless photograph that gives the room a focal point without ever asking for too much attention.",name:"Sofia Bennett",place:"Melbourne",image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&h=750&q=88"}],G=(e,a,s,i=!1)=>`
  <article class="testimonial-card" ${i?'aria-hidden="true"':""}>
    <span class="quote-mark">${s==="mono"?String(a%P.length+1).padStart(2,"0"):"“"}</span>
    <div class="stars" aria-label="5 out of 5 stars">★★★★★</div>
    <blockquote>${e.quote}</blockquote>
    <footer>
      <img src="${e.image}" alt="${i?"":`${e.name}, art collector`}" loading="lazy">
      <span><strong>${e.name}</strong><small>${e.place}</small></span>
    </footer>
  </article>
`,Y=e=>{const a=[...P,P[0]];return`
  <section class="testimonials testimonials-${e} section-pad reveal" aria-roledescription="carousel">
    <div class="testimonials-heading"><span class="eyebrow">Collector notes</span><h2>${e==="grid"?"ART, AT HOME.":e==="cinematic"?"Stories from the walls":"Loved in considered spaces"}</h2><span class="testimonial-count">03 / 03</span></div>
    <div class="testimonial-list" aria-live="off">
      ${a.map((s,i)=>G(s,i,e,i===a.length-1)).join("")}
    </div>
    <div class="testimonial-progress" aria-hidden="true"><span>01</span><i></i><span>03</span></div>
  </section>
`},Q=e=>`
  <section id="contact" class="contact-section contact-${e} section-pad reveal">
    <div class="contact-intro">
      <span class="eyebrow">Contact us</span>
      <h2>Need help choosing the right photograph?</h2>
      <p>Ask about print sizes, styling, delivery or selecting a work for your room. We will help you find a piece that feels right in the space.</p>
      <a href="mailto:studio@jfletcher.art">studio@jfletcher.art</a>
    </div>
    <form class="contact-form">
      <span class="form-caption">Tell us about your space</span>
      <div class="form-grid">
        <input aria-label="Your name" placeholder="Your name">
        <input aria-label="Email address" type="email" placeholder="Email address">
        <input class="wide" aria-label="Subject" placeholder="Subject">
        <textarea aria-label="Message" placeholder="Message"></textarea>
      </div>
      <button class="button" type="submit">Send enquiry ${o("arrow")}</button>
    </form>
  </section>
`,Z=e=>`
  ${V(e)}
  ${Y(e)}
  ${Q(e)}
`,H=e=>`
  <section class="hero hero-primary">
    <div class="hero-copy reveal"><span class="eyebrow">${e.eyebrow}</span><h1>${e.title}</h1><p>${e.copy}</p><a href="/shop" class="button" data-link>${e.cta} ${o("arrow")}</a></div>
    ${w([e.hero,t.coast2,t.interior],"Considered fine-art photography")}
  </section>
  <section class="primary-category-section section-pad">
    <div class="primary-category-heading reveal">
      <div><span class="eyebrow">Browse by subject</span><h2>Photography for every point of view</h2></div>
      <a href="/collections" class="text-link" data-link>View all collections ${o("arrow")}</a>
    </div>
    <div class="primary-categories">
      ${[["Landscapes",t.categoryLandscape],["Portraits",t.portrait],["Urban",t.categoryUrban],["Architecture",t.categoryArchitecture],["Nature",t.categoryNature],["Objects",t.categoryObjects]].map(([a,s],i)=>h(a,s,i)).join("")}
    </div>
  </section>
  ${$()}
  <section class="story split-section reveal"><div class="split-media"><img src="${t.interior}" alt="Framed landscape print in an interior" loading="lazy"></div><div class="split-copy"><span class="eyebrow">The story</span><h2>${e.storyTitle}</h2><p>J. Fletcher Art was founded on a love of light, form and place. Each photograph is captured with purpose and printed with meticulous care.</p><a href="/about" class="text-link" data-link>Learn more ${o("arrow")}</a></div></section>
`,_=e=>`
  <section class="hero hero-dark">
    <div class="hero-copy reveal"><span class="eyebrow">${e.eyebrow}</span><h1>${e.title}</h1><p>${e.copy}</p><a href="/shop" class="button" data-link>${e.cta} ${o("arrow")}</a></div>
    ${w([e.hero,t.coast2,t.architecture2],"Dark gallery photography")}
  </section>
  <section class="dark-collections section-pad">
    <div class="dark-collection-intro reveal"><span class="eyebrow">Collections</span><h2>Explore by<br>collection</h2><a href="/collections" data-link>View all collections ${o("arrow")}</a></div>
    <div class="dark-collection-mosaic">
      ${h("Portrait",t.portrait,0)}
      ${h("Architecture",t.architecture2,1)}
      ${h("Coastal",t.coast2,2)}
      ${h("Landscape",t.mountain,3)}
      ${h("Trees & forests",t.forest,4)}
      ${h("Urban nights",t.urban,5)}
    </div>
  </section>
  ${$()}
  <section class="story split-section reveal"><div class="split-media"><img src="${t.interior}" alt="Dark styled interior" loading="lazy"></div><div class="split-copy"><span class="eyebrow">The art. The story.</span><h2>${e.storyTitle}</h2><p>Every photograph is created with a deep connection to light, place and moment, then printed using museum-grade materials.</p><a href="/about" class="text-link" data-link>Learn more ${o("arrow")}</a></div></section>
`,K=e=>`
  <section class="hero hero-grid">
    <div class="hero-copy reveal"><span class="eyebrow">${e.eyebrow}</span><h1>Fine art.<br>Clear<br>perspective.</h1><p>${e.copy}</p><a href="/shop" class="button" data-link>${e.cta} ${o("arrow")}</a><small class="scroll-cue">Scroll ↓</small></div>
    ${w([e.hero,t.architecture2,t.aerial],"Modern architectural photography")}
  </section>
  <section class="grid-collections section-pad">
    <div class="collection-index reveal"><span class="eyebrow">Explore collections</span>${["Urban","Architecture","Objects","Portraits","Digital art","Nature"].map((a,s)=>`<a href="/collections" data-link><b>${String(s+1).padStart(2,"0")}</b><span>${a}</span><i>+</i></a>`).join("")}<a class="view-all" href="/collections" data-link>View all collections ${o("arrow")}</a></div>
    <div class="grid-collection-images">${[["Urban",t.urban],["Architecture",t.architecture2],["Objects",t.objects],["Portraits",t.portrait],["Digital art",t.aerial],["Nature",t.forest]].map(([a,s],i)=>h(a,s,i)).join("")}</div>
  </section>
  ${$("Selected works","grid-selected")}
  <section class="story split-section reveal"><div class="split-media"><img src="${t.interior}" alt="Framed architectural print" loading="lazy"></div><div class="split-copy"><span class="eyebrow">Made to last</span><h2>${e.storyTitle}</h2><p>Each photograph is printed using archival inks on museum-grade paper to ensure exceptional detail, stability and longevity.</p><a href="/about" class="text-link" data-link>Learn about our process ${o("arrow")}</a></div></section>
  <section class="process-strip">${["Captured","Curated","Printed","Delivered"].map((a,s)=>`<div><b>0${s+1}</b><strong>${a}</strong><small>Handled thoughtfully at every stage.</small></div>`).join("")}</section>
`,X=e=>`
  <section class="mono-hero hero-slider-shell">
    <div class="hero-copy reveal"><span class="eyebrow">${e.eyebrow}</span><h1>${e.title}</h1><p>${e.copy}</p><a href="/shop" class="button" data-link>${e.cta} ${o("arrow")}</a></div>
    ${w([t.architecture2,t.mountain,t.coast2],"Monochrome photography studies")}
  </section>
  <section class="series-strip"><strong>Explore by series</strong>${[["Portraits",t.portrait],["Urban",t.urban],["Objects",t.objects],["Architecture",t.architecture],["Coastal",t.coast2],["Minimal",t.aerial],["Nature",t.forest],["Interiors",t.interior]].map(([a,s],i)=>`<a href="/collections" data-link class="${i===0?"active":""}"><img src="${s}" alt="${a} photography"><span>${a}</span></a>`).join("")}</section>
  ${$()}
  <section class="mono-size-section"><div class="frames"><span class="frame frame-a3">A3</span><span class="frame frame-a4">A4</span><span class="frame frame-a5">A5</span></div><div><span class="eyebrow">Size guide</span><h2>Find the perfect fit</h2><p>All prints are available in three carefully considered sizes.</p>${A.map(a=>`<p class="size-line"><b>${a}</b><span>${a==="A3"?"29.7 × 42 cm":a==="A4"?"21 × 29.7 cm":"14.8 × 21 cm"}</span></p>`).join("")}</div></section>
  <section class="mono-editorial"><div><span class="eyebrow">The artist</span><h2>${e.storyTitle}</h2><p>Each image is captured with purpose and printed with care.</p></div><img src="${t.mountain2}" alt="Mountain photograph"><div><span class="eyebrow">Material quality</span><h2>Museum-grade materials. Made to last.</h2><p>Archival inks, premium paper and careful hand finishing.</p></div><img src="${t.paper}" alt="Fine art paper"></section>
`,ee=e=>`
  <section class="magazine-hero hero-slider-shell">
    <div class="hero-copy reveal"><span class="eyebrow">${e.eyebrow}</span><h1>${e.title}</h1><p>${e.copy}</p><a href="/shop" class="button" data-link>${e.cta} ${o("arrow")}</a></div>
    ${w([t.architecture2,t.mountain,t.interior],"Gallery magazine photography")}
  </section>
  <section class="magazine-collections section-pad"><div class="magazine-intro reveal"><span class="eyebrow">Collection stories</span><h2>${e.collectionTitle}</h2><a href="/collections" data-link>Explore all collections ${o("arrow")}</a></div><div class="magazine-card-grid">${[["Portrait stories",t.portrait],["Urban rhythm",t.urban],["Objects of form",t.objects],["Wild landscapes",t.mountain],["Architectural form",t.architecture],["Digital horizons",t.aerial]].map(([a,s],i)=>h(a,s,i)).join("")}</div></section>
  ${$("Exceptional prints, made to last.")}
  <section class="magazine-editorial"><article><span class="eyebrow">From the journal</span><h2>The beauty of restraint</h2><p>On simplicity, negative space and letting the image speak.</p><a href="/journal" data-link>Read the article ${o("arrow")}</a></article><img src="${t.aerial}" alt="Abstract landscape"><article class="dark-panel"><span class="eyebrow">Styled spaces</span><h2>Art that completes the space</h2><a href="/collections" data-link>Explore styled spaces ${o("arrow")}</a></article><img src="${t.interior}" alt="Gallery wall"></section>
  <section class="story split-section reveal"><div class="split-media"><img src="${t.paper}" alt="Archival fine art print detail" loading="lazy"></div><div class="split-copy"><span class="eyebrow">Crafted with intention</span><h2>${e.storyTitle}</h2><p>Archival fine art paper, rich pigment inks and expert craftsmanship.</p></div></section>
`,ae=e=>`
  <section class="hero hero-soft"><div class="hero-copy reveal"><span class="eyebrow">${e.eyebrow}</span><h1>${e.title}</h1><p>${e.copy}</p><a href="/shop" class="button" data-link>${e.cta}</a><div class="hero-benefits"><span>◇ Museum quality</span><span>◎ Worldwide delivery</span><span>♙ Secure checkout</span></div></div>${w([e.hero,t.coast,t.interior],"Soft contemporary photography")}</section>
  <section class="filter-bar"><div><span>Filter by colour</span><i style="--c:#b3a48d"></i><i style="--c:#718077"></i><i style="--c:#5c7380"></i><i style="--c:#c9c8c5"></i><i style="--c:#343638"></i><i style="--c:#aa6f55"></i></div><div><span>Filter by subject</span><button>Landscapes</button><button>Coastal</button><button>Mountains</button><button>Architecture</button><button>Abstract</button></div></section>
  <section class="soft-categories section-pad"><div class="soft-category-heading"><span class="eyebrow">Browse by subject</span><h2>Find the mood for your space</h2><a href="/collections" data-link>All collections ${o("arrow")}</a></div><div class="soft-category-mosaic">${[["Portraits",t.portrait],["Objects",t.objects],["Nature",t.forest],["Architecture",t.architecture2],["Abstract",t.aerial],["Interiors",t.interior]].map(([a,s],i)=>h(a,s,i)).join("")}</div></section>
  ${$()}
  <section class="soft-inspiration split-section reveal"><div class="split-copy"><span class="eyebrow">Inspiration</span><h2>${e.collectionTitle}</h2><p>Prints designed to work beautifully alone or together.</p><a href="/collections" class="button" data-link>Explore collections</a></div><div class="split-media"><img src="${t.interior}" alt="Curated gallery wall"></div></section>
  <section class="choose-steps"><span class="eyebrow">How to choose</span><h2>Find the perfect print in three simple steps</h2><div>${["Choose your print","Choose your size","Style your space"].map((a,s)=>`<article><b>${s+1}</b><strong>${a}</strong><p>${s===1?"Select A3, A4 or A5 — all prints share one uniform price.":"A simple, considered path to art that belongs in your space."}</p></article>`).join("")}</div></section>
  <section class="soft-quality"><article><span class="eyebrow">Crafted to last</span><h2>${e.storyTitle}</h2><p>Archival fine art paper, pigment inks and rich tonal clarity.</p></article><img src="${t.paper}" alt="Print quality detail"><article><span class="eyebrow">Our collectors love</span><h2>★★★★★</h2><blockquote>“The quality is breathtaking. The print brings such a sense of calm to my home.”</blockquote></article></section>
`,te=e=>`
  <section class="hero hero-cinematic"><div class="hero-copy reveal"><h1>${e.title}</h1><span class="cinematic-subtitle">${e.eyebrow}</span><a href="/shop" class="button" data-link>${e.cta} ${o("arrow")}</a></div>${w([e.hero,t.desert,t.coast2],"Cinematic landscape photography")}</section>
  <section class="cinematic-collections section-pad"><div class="cinematic-rule"><span>Explore our collections</span></div><div class="collection-grid">${[["Wild landscapes",t.mountain],["Architectural form",t.architecture],["Coastal stories",t.coast2],["Nature studies",t.forest],["Desert light",t.desert],["Abstract terrain",t.aerial]].map(([a,s],i)=>h(a,s,i)).join("")}</div></section>
  ${$()}
  <section class="limited-feature"><img src="${t.mountain}" alt="Summit Light limited edition"><div><span class="eyebrow">Limited edition</span><h2>Summit Light</h2><strong>$89.00</strong><p>A fleeting moment above the clouds, captured in the Italian Alps.</p>${E("detail-sizes")}<button class="button add-cart" data-add="veil-of-light">Add to cart</button></div><ul><li>Museum quality</li><li>Limited editions</li><li>Made to order</li></ul></section>
  <section class="cinematic-size"><div><span class="eyebrow">Find your perfect fit</span><h2>See it. Love it. Live with it.</h2><a href="/product?id=veil-of-light" data-link>View size guide ${o("arrow")}</a></div><div class="frames"><span class="frame frame-a3">A3</span><span class="frame frame-a4">A4</span><span class="frame frame-a5">A5</span></div></section>
  <section class="story split-section reveal"><div class="split-media"><img src="${t.mountain2}" alt="Valley landscape" loading="lazy"></div><div class="split-copy"><span class="eyebrow">Behind the lens</span><h2>${e.storyTitle}</h2><p>Fine-art landscape and architecture photography inspired by remote places and timeless shapes.</p><a href="/about" class="text-link" data-link>Read the story ${o("arrow")}</a></div></section>
`,se=e=>{const a=N[e]||N.primary,i={primary:H,dark:_,grid:K,mono:X,magazine:ee,soft:ae,cinematic:te}[e]||H;return`
    <div class="site theme-${a.theme}">
      ${v(a.theme)}
      <main>
        ${i(a)}
        ${M()}
        ${Z(a.theme)}
      </main>
      ${b(a.theme)}
    </div>`},T=(e,a,s)=>`<section class="page-hero"><span class="eyebrow">${e}</span><h1>${a}</h1><p>${s}</p></section>`,ie=()=>{const e=R(),a=["All",...new Set(p.map(d=>d.category))],s=["All",...new Set(p.map(d=>d.colour))],i=J(e),r=Math.max(1,Math.ceil(i.length/e.pageSize)),l=Math.min(Math.max(e.page,1),r),c=(l-1)*e.pageSize,u=i.slice(c,c+e.pageSize),S=i.length?c+1:0,j=Math.min(c+e.pageSize,i.length);return`
  <div class="site theme-primary">${v()}<main>
    ${T("The collection","Fine-art prints for considered spaces","Explore landscapes, architecture and coastal studies, printed in three carefully selected sizes.")}
    <section class="shop-tools">
      <p>Showing ${S}-${j} of ${i.length} works</p>
      <div class="shop-controls">
        <label>Category
          <select data-shop-control="category">
            ${a.map(d=>`<option value="${d}" ${e.category===d?"selected":""}>${d}</option>`).join("")}
          </select>
        </label>
        <label>Colour
          <select data-shop-control="colour">
            ${s.map(d=>`<option value="${d}" ${e.colour===d?"selected":""}>${d}</option>`).join("")}
          </select>
        </label>
        <label>Sort by
          <select data-shop-control="sort">
            <option value="featured" ${e.sort==="featured"?"selected":""}>Featured</option>
            <option value="newest" ${e.sort==="newest"?"selected":""}>Newest</option>
            <option value="name-asc" ${e.sort==="name-asc"?"selected":""}>Name A-Z</option>
            <option value="name-desc" ${e.sort==="name-desc"?"selected":""}>Name Z-A</option>
          </select>
        </label>
        <label>Page size
          <select data-shop-control="pageSize">
            ${[4,8,12].map(d=>`<option value="${d}" ${e.pageSize===d?"selected":""}>${d}</option>`).join("")}
          </select>
        </label>
        <button class="shop-reset" data-shop-reset>Reset</button>
      </div>
    </section>
    <section class="product-grid shop-grid section-pad">${u.length?u.map(L).join(""):'<div class="empty-results"><h2>No prints found</h2><p>Try a different category or colour.</p><button class="button" data-shop-reset>Reset filters</button></div>'}</section>
    <nav class="pagination" aria-label="Shop pagination">
      <button ${l===1?"disabled":""} data-shop-page="${l-1}">Previous</button>
      ${Array.from({length:r},(d,k)=>`<button class="${l===k+1?"active":""}" data-shop-page="${k+1}">${k+1}</button>`).join("")}
      <button ${l===r?"disabled":""} data-shop-page="${l+1}">Next</button>
    </nav>
  </main>${b()}</div>`},oe=()=>{const e=new URLSearchParams(location.search).get("id"),a=p.find(c=>c.id===e)||p[0],s=U(a),i=n.galleryIndex%s.length,r=s[i],l=p.filter(c=>c.id!==a.id).slice(0,4);return`<div class="site theme-primary">${v()}<main>
    <section class="product-detail">
      <div class="product-gallery">
        <div class="main-product-image"><img data-gallery-main src="${r}" alt="${a.name}"></div>
        <div class="detail-slider" aria-label="${a.name} image gallery">
          <button class="slider-btn" data-gallery-prev aria-label="Previous image">‹</button>
          <div class="detail-thumbs">
            ${s.map((c,u)=>`<button class="${u===i?"active":""}" data-gallery-image="${u}" aria-label="View image ${u+1}"><img src="${c}" alt="${a.name} preview ${u+1}" loading="lazy"></button>`).join("")}
          </div>
          <button class="slider-btn" data-gallery-next aria-label="Next image">›</button>
        </div>
      </div>
      <div class="product-info">
        <span class="eyebrow">Limited photographic print</span><h1>${a.name}</h1><p class="price">$${a.price}.00</p>
        <p>A contemplative study of light, scale and atmosphere, produced as an archival fine-art print with exceptional tonal depth.</p>
        <div class="option"><strong>Select size</strong><div class="detail-sizes">${A.map(c=>`<button class="${n.size===c?"active":""}" data-size="${c}"><b>${c}</b><small>${c==="A3"?"29.7 × 42 cm":c==="A4"?"21 × 29.7 cm":"14.8 × 21 cm"}</small></button>`).join("")}</div></div>
        <button class="button add-cart" data-add="${a.id}">Add to cart</button>
        <ul class="product-notes"><li>Archival pigment inks</li><li>Premium museum-grade paper</li><li>Printed and inspected to order</li><li>Secure worldwide delivery</li></ul>
      </div>
    </section>
    <section class="section-pad related"><div class="section-heading"><span class="eyebrow">You may also like</span><h2>Related works</h2><a href="/shop" class="text-link" data-link>See all ${o("arrow")}</a></div><div class="product-grid">${l.map(L).join("")}</div></section>
    ${M()}
  </main>${b()}</div>`},re=()=>`<div class="site theme-primary">${v()}<main>
  ${T("Browse by subject","Collections","Curated series built around place, form, atmosphere and light.")}
  <section class="collection-list section-pad">${[["01","Wild landscapes",t.mountain],["02","Architectural form",t.architecture],["03","Coastal elements",t.coast2],["04","Quiet forests",t.forest]].map(([e,a,s])=>`<a href="/shop" data-link class="collection-row reveal"><span>${e}</span><h2>${a}</h2><img src="${s}" alt="${a}">${o("arrow")}</a>`).join("")}</section>
</main>${b()}</div>`,ne=()=>`<div class="site theme-primary">${v()}<main class="about-page">
  <section class="about-hero">
    <div class="about-hero-copy reveal"><span class="eyebrow">Our story</span><h1>Photography shaped by patient observation</h1><p>J. Fletcher Art creates enduring photographic works that bring atmosphere, clarity and a quiet sense of place into everyday spaces.</p></div>
    <div class="about-hero-image"><img src="${t.mountain2}" alt="Remote mountain landscape"></div>
  </section>

  <section class="about-intro section-pad reveal">
    <span class="section-number">01</span>
    <div><span class="eyebrow">Behind the lens</span><h2>Light, place and a slower way of seeing.</h2></div>
    <div><p>Every work begins with time spent looking—observing the rhythm of a landscape, the geometry of a building, or the brief moment when light changes everything.</p><p>The aim is not simply to document a place, but to distil the feeling of being there into an image that can live with you for years.</p></div>
  </section>

  <section class="about-manifesto">
    <img src="${t.coast2}" alt="Atmospheric coastline">
    <blockquote>“The photographs are quiet by design. They leave room for the viewer, and room for the space around them.”</blockquote>
    <img src="${t.architecture2}" alt="Minimal architectural study">
  </section>

  <section class="about-process section-pad">
    <div class="section-heading reveal"><span class="eyebrow">From field to frame</span><h2>A considered process</h2></div>
    <div class="about-process-grid">
      ${[["01","Observed","Locations are explored patiently, often across changing seasons and shifting weather."],["02","Captured","Compositions are made with attention to balance, atmosphere, scale and natural light."],["03","Refined","Each image is carefully edited to preserve authentic texture, tone and visual depth."],["04","Printed","Archival pigment inks and museum-grade paper produce exceptional detail and longevity."],["05","Inspected","Every print is checked by hand before being signed, protected and carefully packed."],["06","Delivered","Orders are securely shipped worldwide and arrive ready for considered framing."]].map(([e,a,s])=>`<article class="reveal"><b>${e}</b><h3>${a}</h3><p>${s}</p></article>`).join("")}
    </div>
  </section>

  <section class="about-materials split-section reveal">
    <div class="split-media"><img src="${t.paper}" alt="Museum-grade fine art paper"></div>
    <div class="split-copy"><span class="eyebrow">Materials and quality</span><h2>Made carefully. Made to endure.</h2><p>Every photograph is printed using archival pigment inks on premium, acid-free fine-art paper selected for its subtle texture and tonal range.</p>
      <ul class="quality-list"><li>Archival pigment inks with rich, stable colour</li><li>Premium fine-art paper with a refined matte finish</li><li>Individually inspected and protected by hand</li><li>Produced in A3, A4 and A5 at one uniform price</li></ul>
      <a href="/product?id=veil-of-light" class="text-link" data-link>Explore print details ${o("arrow")}</a>
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
    <img src="${t.interior}" alt="Fine art photography displayed in an interior">
    <div><span class="eyebrow">The collection</span><h2>Find a work that belongs in your space.</h2><a href="/shop" class="button" data-link>Explore all prints ${o("arrow")}</a></div>
  </section>
  ${M()}
</main>${b()}</div>`,le=[{category:"Inspiration",title:"The beauty of restraint",excerpt:"On simplicity, negative space and allowing an image to speak without noise.",image:t.aerial,date:"18 June 2026"},{category:"Behind the lens",title:"Waiting for weather",excerpt:"Why atmosphere, uncertainty and patience remain central to the photographic process.",image:t.mountain,date:"02 June 2026"},{category:"Print guide",title:"Choosing between A3, A4 and A5",excerpt:"A practical guide to scale, placement and building a considered gallery wall.",image:t.interior,date:"21 May 2026"},{category:"Architecture",title:"Where shadow becomes form",excerpt:"Finding rhythm and stillness in concrete, curves and carefully controlled light.",image:t.architecture2,date:"09 May 2026"},{category:"Field notes",title:"At the edge of the land",excerpt:"Notes from a wind-shaped coastline and the making of a new coastal series.",image:t.coast2,date:"27 April 2026"},{category:"Materials",title:"Why archival paper matters",excerpt:"The surface, weight and longevity behind every J. Fletcher Art print.",image:t.paper,date:"11 April 2026"}],ce=()=>`<div class="site theme-primary">${v()}<main class="journal-page">
  <section class="journal-heading section-pad"><span class="eyebrow">Stories from the field</span><h1>Journal</h1><p>Notes on place, process, composition and the quiet details behind each image.</p></section>

  <section class="journal-feature reveal">
    <div class="journal-feature-image"><img src="${t.coast}" alt="Quiet coastline at dusk"></div>
    <article><span class="eyebrow">Featured story · Field notes</span><h2>The long way to a quiet image</h2><p>A photograph may take a fraction of a second to make, but the work behind it can involve days of walking, looking, returning and waiting for a place to reveal its rhythm.</p><div class="article-meta"><span>12 min read</span><span>23 June 2026</span></div><a href="#journal-stories" class="text-link">Read the story ${o("arrow")}</a></article>
  </section>

  <nav class="journal-filter" aria-label="Journal categories"><button class="active">All stories</button><button>Field notes</button><button>Behind the lens</button><button>Inspiration</button><button>Print guides</button></nav>

  <section id="journal-stories" class="journal-stories section-pad">
    <div class="section-heading"><span class="eyebrow">Latest stories</span><h2>Ideas, places and process</h2></div>
    <div class="journal-grid">${le.map((e,a)=>`<article class="journal-card reveal" style="--delay:${a*65}ms"><a href="#journal-stories" class="journal-card-image"><img src="${e.image}" alt="${e.title}" loading="lazy"></a><div><span class="eyebrow">${e.category}</span><h3>${e.title}</h3><p>${e.excerpt}</p><footer><time>${e.date}</time><a href="#journal-stories" aria-label="Read ${e.title}">${o("arrow")}</a></footer></div></article>`).join("")}</div>
  </section>

  <section class="journal-essay">
    <div><span class="eyebrow">Field note 018</span><h2>“The best light often arrives after you have decided nothing is going to happen.”</h2><p>South coast, winter. A final clearing in the weather and three minutes of soft light across the water.</p></div>
    <img src="${t.coast2}" alt="Winter coastline field note">
  </section>

  <section class="journal-guides section-pad">
    <div class="section-heading"><span class="eyebrow">Useful guides</span><h2>Living with photographic art</h2></div>
    <div class="guide-grid">
      <a href="/product?id=veil-of-light" data-link><b>01</b><h3>How to choose your print size</h3><span>A3, A4 and A5 explained ${o("arrow")}</span></a>
      <a href="/collections" data-link><b>02</b><h3>Building a balanced gallery wall</h3><span>Composition and spacing ${o("arrow")}</span></a>
      <a href="/about" data-link><b>03</b><h3>Caring for archival fine-art prints</h3><span>Handling and longevity ${o("arrow")}</span></a>
    </div>
  </section>
</main>${b()}</div>`,de=()=>{const e=n.cart.map(s=>p.find(i=>i.id===s)).filter(Boolean),a=e.reduce((s,i)=>s+i.price,0);return`<div class="site theme-primary">${v()}<main>
    ${T("Your selection","Shopping cart",e.length?"Your selected works are reserved while you complete checkout.":"Your cart is ready for something beautiful.")}
    <section class="cart-layout section-pad">
      <div class="cart-items">${e.length?e.map((s,i)=>`<article class="cart-item"><img src="${s.image}" alt="${s.name}"><div><h3>${s.name}</h3><p>${n.size} · Fine-art print</p><button data-remove="${i}">Remove</button></div><strong>$${s.price}.00</strong></article>`).join(""):'<div class="empty-cart"><h2>Your cart is empty</h2><a class="button" href="/shop" data-link>Explore prints</a></div>'}</div>
      <aside class="cart-summary"><h2>Order summary</h2><p><span>Subtotal</span><strong>$${a}.00</strong></p><p><span>Delivery</span><span>Calculated at checkout</span></p><div class="summary-total"><span>Total</span><strong>$${a}.00</strong></div><a href="/checkout" class="button ${e.length?"":"disabled"}" data-link>Secure checkout</a><small>Taxes and delivery calculated at checkout.</small></aside>
    </section>
  </main>${b()}</div>`},pe=()=>`<div class="site theme-primary">${v()}<main>
  ${T("Secure checkout","Complete your order","Checkout interface preview — connect this form to the client’s existing payment provider during integration.")}
  <section class="checkout-layout section-pad">
    <form class="checkout-form"><h2>Contact</h2><input type="email" placeholder="Email address"><h2>Delivery</h2><div class="form-grid"><input placeholder="First name"><input placeholder="Last name"><input class="wide" placeholder="Address"><input placeholder="City"><input placeholder="Postcode"><select><option>Australia</option><option>United States</option><option>United Kingdom</option></select></div><h2>Payment</h2><div class="payment-placeholder">${o("shield")}<p>Secure payment integration connects here.</p></div><button class="button" type="button">Pay securely</button></form>
    <aside class="checkout-summary">${n.cart.map(e=>p.find(a=>a.id===e)).filter(Boolean).map(e=>`<div><img src="${e.image}" alt=""><span><strong>${e.name}</strong><small>${n.size}</small></span><b>$${e.price}.00</b></div>`).join("")||"<p>No products selected.</p>"}</aside>
  </section>
</main>${b()}</div>`,y=()=>{const{path:e,home:a}=D();n.menuOpen=!1,n.switcherOpen=!1,e==="/shop"?f.innerHTML=ie():e==="/product"?f.innerHTML=oe():e==="/collections"?f.innerHTML=re():e==="/about"?f.innerHTML=ne():e==="/journal"?f.innerHTML=ce():e==="/cart"?f.innerHTML=de():e==="/checkout"?f.innerHTML=pe():f.innerHTML=se(a),he()},he=()=>{const e=new IntersectionObserver(a=>a.forEach(s=>{s.isIntersecting&&(s.target.classList.add("is-visible"),e.unobserve(s.target))}),{threshold:.12});document.querySelectorAll(".reveal").forEach(a=>e.observe(a))};document.addEventListener("click",e=>{var S,j,d,k,F;const a=e.target.closest("[data-link]");if(a){e.preventDefault(),C(a.getAttribute("href"));return}const s=e.target.closest("[data-hero-slide]");if(s){const g=s.closest(".hero-slider"),I=Number(s.dataset.heroSlide);if(!g||!Number.isInteger(I))return;g.classList.add("is-manual"),g.style.setProperty("--hero-slide",I),g.querySelectorAll("[data-hero-slide]").forEach(x=>{const O=x===s;x.classList.toggle("is-active",O),x.setAttribute("aria-current",String(O))});return}const i=e.target.closest("[data-shop-page]");if(i){B({page:Number(i.dataset.shopPage)});return}if(e.target.closest("[data-shop-reset]")){C("/shop");return}const r=e.target.closest("[data-gallery-image]");if(r){n.galleryIndex=Number(r.dataset.galleryImage),y();return}if(e.target.closest("[data-gallery-prev]")){const g=document.querySelectorAll("[data-gallery-image]").length||1;n.galleryIndex=(n.galleryIndex-1+g)%g,y();return}if(e.target.closest("[data-gallery-next]")){const g=document.querySelectorAll("[data-gallery-image]").length||1;n.galleryIndex=(n.galleryIndex+1)%g,y();return}if(e.target.closest("[data-switcher]")){n.switcherOpen=!n.switcherOpen,(S=document.querySelector(".home-switcher"))==null||S.classList.toggle("is-open",n.switcherOpen);return}if(e.target.closest("[data-menu]")){n.menuOpen=!n.menuOpen,(j=document.querySelector(".nav"))==null||j.classList.toggle("is-open",n.menuOpen);return}const l=(d=e.target.closest("[data-size]"))==null?void 0:d.dataset.size;if(l){n.size=l,y();return}const c=(k=e.target.closest("[data-add]"))==null?void 0:k.dataset.add;if(c){n.cart.push(c),localStorage.setItem("jf-cart",JSON.stringify(n.cart)),y();return}const u=(F=e.target.closest("[data-remove]"))==null?void 0:F.dataset.remove;u!==void 0&&(n.cart.splice(Number(u),1),localStorage.setItem("jf-cart",JSON.stringify(n.cart)),y())});document.addEventListener("change",e=>{const a=e.target.closest("[data-shop-control]");if(!a)return;const s=a.dataset.shopControl,i=s==="pageSize"?Number(a.value):a.value;B({[s]:i,page:1})});document.addEventListener("submit",e=>{e.preventDefault(),e.target.reset()});window.addEventListener("popstate",y);y();
