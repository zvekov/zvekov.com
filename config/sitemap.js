const sitemapConfig = [
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
]
module.exports = sitemapConfig
