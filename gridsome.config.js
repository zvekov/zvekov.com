
module.exports = {
  siteName: "Yury Zvekov",
  siteUrl: process.env.APP_URL,
  plugins: [
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [
          // locales list
          "fr",
          "es",
          "en",
          "ru",
          "be",
        ],
        pathAliases: {
          // path segment alias for each locales
          fr: "fr",
          es: "es",
          en: "en",
          ru: "ru",
          be: "be",
        },
        fallbackLocale: "en", // fallback language
        defaultLocale: "en", // default language
        enablePathRewrite: true, // rewrite path with locale prefix, default: true
        rewriteDefaultLanguage: false, // rewrite default locale, default: true
        messages: {
          fr: require("./src/locales/fr-fr.json"), // Messages files
          es: require("./src/locales/es-es.json"),
          en: require("./src/locales/en-gb.json"),
          ru: require("./src/locales/ru-ru.json"),
          be: require("./src/locales/be-be.json"),
        },
      },
    },
    {
      use: "@gridsome/source-graphql",
      options: {
        url: process.env.API_URL,
        fieldName: "strapi",
        typeName: "strapiTypes",
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
          anchorClassName: "icon icon-link",
          plugins: [
            [
              "gridsome-plugin-remark-prismjs-all",
              {
                highlightClassName: "gridsome-highlight",
                codeTitleClassName: "gridsome-code-title",
                classPrefix: "language-",
                aliases: {},
                noInlineHighlight: false,
                showLineNumbers: false, //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
                languageExtensions: [],
                prompt: {
                  //  `require("prismjs/plugins/command-line/prism-command-line.css");`
                  user: `root`,
                  host: `localhost`,
                  global: false,
                },
              },
            ],
          ],
        },
      },
    },
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "./tailwind.config.js",
      //   purgeConfig: {
      //     safelist: [/hooper/, /ais-$/],
      //   },
      //   presetEnvConfig: {},
      //   shouldPurge: true,
      //   shouldImport: true,
      //   shouldTimeTravel: true,
      //   shouldPurgeUnusedKeyframes: true,
      },
    },
    {
      use: "gridsome-plugin-gtm",
      options: {
        id: process.env.GTM_ID,
        enabled: true,
        debug: true,
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        exclude: [
          "/ru/notes/*",
          "/es/notes/*",
          "/be/notes/*",
          "/fr/notes/*",
          "/en/notes/*",
          "*/404",
        ],
        config: {
          "/": {
            changefreq: "weekly",
            priority: 1,
            lastmod: new Date(),
          },
          "/*": {
            changefreq: "weekly",
            priority: 0.9,
            lastmod: new Date(),
          },
          "/**": {
            changefreq: "weekly",
            priority: 0.8,
            lastmod: new Date(),
          },
          "/notes/*": {
            changefreq: "weekly",
            priority: 0.8,
            lastmod: new Date(),
          },
        },
      },
    },
    {
      use: "gridsome-plugin-robots",
      options: {
        host: process.env.APP_URL,
        sitemap: process.env.APP_URL + "/sitemap.xml",
        policy: [
          { userAgent: "*", allow: "/", disallow: ["/privacy/", "/*utm_"] },
          {
            userAgent: "YandexBot",
            allow: "/",
            disallow: ["/privacy/", "/*utm_"],
          },
        ],
      },
    },
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
  ],
  chainWebpack: (config) => {
    config.resolve.alias.set("@modules", "@/assets/js/modules")
    config.resolve.alias.set("@utilities", "@/assets/js/utilities")
  },
}
