export const images = {
  mountain: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=86",
  mountain2: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=86",
  coast: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=86",
  coast2: "https://images.unsplash.com/photo-1498623116890-37e912163d5d?auto=format&fit=crop&w=1600&q=86",
  architecture: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=86",
  architecture2: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=86",
  forest: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=86",
  desert: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1600&q=86",
  aerial: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1800&q=86",
  interior: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=86",
  paper: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=1400&q=84"
};

export const products = [
  { id: "veil-of-light", name: "Veil of Light", price: 89, image: images.mountain, category: "Landscapes", colour: "Blue", date: "2026-06-01" },
  { id: "silent-geometry", name: "Silent Geometry", price: 89, image: images.architecture2, category: "Architecture", colour: "Neutral", date: "2026-05-22" },
  { id: "edge-of-the-land", name: "Edge of the Land", price: 89, image: images.coast2, category: "Coastal", colour: "Blue", date: "2026-05-12" },
  { id: "parallel-lines", name: "Parallel Lines", price: 89, image: images.architecture, category: "Architecture", colour: "Neutral", date: "2026-04-28" },
  { id: "forest-study", name: "Forest Study", price: 89, image: images.forest, category: "Forests", colour: "Green", date: "2026-04-16" },
  { id: "dune-shadows", name: "Dune Shadows", price: 89, image: images.desert, category: "Landscapes", colour: "Warm", date: "2026-04-02" },
  { id: "still-water", name: "Still Water", price: 89, image: images.aerial, category: "Abstract", colour: "Green", date: "2026-03-18" },
  { id: "quiet-room", name: "Quiet Room", price: 89, image: images.interior, category: "Interiors", colour: "Warm", date: "2026-03-04" }
];

export const homes = [
  { id: "primary", title: "Considered Spaces", thumb: "/mockups/j-fletcher-art-homepage-concept.png" },
  { id: "dark", title: "Dark Gallery", thumb: "/mockups/j-fletcher-art-02-dark-gallery.png" },
  { id: "grid", title: "Modernist Grid", thumb: "/mockups/j-fletcher-art-04-modernist-grid.png" },
  { id: "mono", title: "Monochrome Portfolio", thumb: "/mockups/j-fletcher-art-06-monochrome-portfolio.png" },
  { id: "magazine", title: "Gallery Magazine", thumb: "/mockups/j-fletcher-art-08-gallery-magazine.png" },
  { id: "soft", title: "Soft Contemporary", thumb: "/mockups/j-fletcher-art-09-soft-contemporary.png" },
  { id: "cinematic", title: "Cinematic Panorama", thumb: "/mockups/j-fletcher-art-10-cinematic-panorama.png" }
];

export const homeConfig = {
  primary: {
    eyebrow: "Fine-art photography prints",
    title: "Photography for considered spaces",
    copy: "Fine-art prints that bring clarity, atmosphere and quiet beauty to your home or workspace.",
    cta: "Shop the collection",
    hero: images.mountain,
    theme: "primary",
    collectionTitle: "Explore the collection",
    storyTitle: "Intentional imagery. Timeless expression."
  },
  dark: {
    eyebrow: "Fine-art photography prints",
    title: "Art shaped by light and place",
    copy: "Fine-art photographic prints, crafted with purpose and printed to last a lifetime.",
    cta: "Explore the prints",
    hero: images.coast2,
    theme: "dark",
    collectionTitle: "Explore by collection",
    storyTitle: "Intentional imagery. Timeless expression."
  },
  grid: {
    eyebrow: "Fine art photography prints",
    title: "Fine art. Clear perspective.",
    copy: "Thoughtful photography for modern spaces. Printed to museum-grade standards.",
    cta: "View new releases",
    hero: images.architecture,
    theme: "grid",
    collectionTitle: "Explore collections",
    storyTitle: "Captured with intention. Printed to endure."
  },
  mono: {
    eyebrow: "Fine-art photography prints",
    title: "Images with room to breathe",
    copy: "Fine-art photography prints for contemporary spaces. Timeless imagery, considered details.",
    cta: "Shop all prints",
    hero: images.mountain2,
    theme: "mono",
    collectionTitle: "Explore by series",
    storyTitle: "Photography shaped by place, light and intention."
  },
  magazine: {
    eyebrow: "Fine art photography prints",
    title: "A different way of seeing",
    copy: "Thoughtful imagery. Timeless expression. Beautifully crafted for considered spaces.",
    cta: "Discover new work",
    hero: images.architecture2,
    theme: "magazine",
    collectionTitle: "Curated themes. Endless inspiration.",
    storyTitle: "Museum quality. Made to endure."
  },
  soft: {
    eyebrow: "Curated photography. Timeless spaces.",
    title: "Quiet art for everyday living",
    copy: "Thoughtful photographic prints created to bring calm, beauty and meaning to your home.",
    cta: "Find your print",
    hero: images.aerial,
    theme: "soft",
    collectionTitle: "Curate your space",
    storyTitle: "Museum quality in every detail."
  },
  cinematic: {
    eyebrow: "Fine art photography prints for considered spaces",
    title: "The world, framed",
    copy: "Limited photographic works shaped by wilderness, architecture and extraordinary light.",
    cta: "Explore prints",
    hero: images.mountain2,
    theme: "cinematic",
    collectionTitle: "Explore our collections",
    storyTitle: "Crafted by passion. Guided by light."
  }
};
