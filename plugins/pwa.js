const pwa = [
  {
    use: "gridsome-plugin-pwa",
    options: {
      // Service Worker Options
      disableServiceWorker: false,
      serviceWorkerPath: "/service-worker.js",
      cachedFileTypes: "js,json,css,html,png,jpg,jpeg,svg,gif",
      disableTemplatedUrls: false, // Optional

      // Manifest Options (https://developer.mozilla.org/en-US/docs/Web/Manifest)
      manifestPath: "/manifest.json",
      title: "Yury Zvekov",
      startUrl: "/notes/",
      display: "standalone",
      statusBarStyle: "default",
      themeColor: "#ffffff",
      backgroundColor: "#ffffff",
      icon: "src/favicon.png",
      shortName: "Yury Zvekov", // Optional
      description: "Yury Zvekov", // Optional
      categories: ["personal"], // Optional
      lang: "en-gb", // Optional
      dir: "auto", // Optional
      maskableIcon: true, // Optional
      //   screenshots: [
      //     // Optional
      //     {
      //       src: "src/screenshot1.png",
      //       sizes: "1280x720",
      //       type: "image/png",
      //     },
      //   ],
      //   gcmSenderId: undefined, // Optional

      //   // Standard Meta Tags
      //   svgFavicon: "favicon.svg", // Optional. Requires favicon.ico fallback

      //   // Microsoft Windows Meta Tags
      //   msTileColor: "#666600", // Optional

      //   // Apple MacOS Meta Tags
      //   appleMaskIcon: "favicon.svg", // Optional
      //   appleMaskIconColor: "#666600", // Optional
    },
  },
]
module.exports = pwa
