const sourceGraphql = require("./plugins/source-graphql.js")
const i18n = require("./plugins/i18n.js")
const svg = require("./plugins/svg.js")
const sitemap = require("./plugins/sitemap.js")
const robotsTxt = require("./plugins/robots-txt.js")
const pwa = require("./plugins/pwa.js")
const gtm = require("./plugins/gtm.js")

module.exports = {
  siteName: "Yury Zvekov",
  siteUrl: process.env.APP_URL,
  plugins: [
    ...sourceGraphql,
    ...i18n,
    ...svg,
    ...sitemap,
    ...robotsTxt,
    ...pwa,
    ...gtm,
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "./tailwind.config.js",
      },
    },
  ],
  chainWebpack: (config) => {
    config.resolve.alias.set("@modules", "@/assets/js/modules")
    config.resolve.alias.set("@utilities", "@/assets/js/utilities")
  },
}
