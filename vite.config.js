import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

const page = name => fileURLToPath(new URL(name, import.meta.url));

export default defineConfig({
  server: {
    port: 5175,
    watch: {
      // Avoid Linux ENOSPC errors when other development tools have exhausted
      // the machine's available inotify watcher instances.
      usePolling: true,
      interval: 300
    }
  },
  build: {
    rollupOptions: {
      input: {
        "considered-spaces-home": page("index.html"),
        "dark-gallery-home": page("dark-gallery-home.html"),
        "modernist-grid-home": page("modernist-grid-home.html"),
        "monochrome-portfolio-home": page("monochrome-portfolio-home.html"),
        "gallery-magazine-home": page("gallery-magazine-home.html"),
        "soft-contemporary-home": page("soft-contemporary-home.html"),
        "cinematic-panorama-home": page("cinematic-panorama-home.html")
      }
    }
  }
});
