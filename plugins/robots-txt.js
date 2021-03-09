const robotsTxt = [
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
]
module.exports = robotsTxt
