const sourceGraphqlConfig = require("./config/source-graphql.js")
const i18nConfig = require( "./config/i18n.js" )
const svgConfig = require("./config/svg.js")
const sitemapConfig = require("./config/sitemap.js")
const robotstxtConfig = require("./config/robotstxt.js")
const pwaConfig = require("./config/pwa.js")
const gtmConfig = require("./config/gtm.js")

module.exports = {
  siteName: "Yury Zvekov",
  siteUrl: process.env.APP_URL,
  plugins: [
    ...sourceGraphqlConfig,
    ...i18nConfig,
    ...svgConfig,
    ...sitemapConfig,
    ...robotstxtConfig,
    ...pwaConfig,
    ...gtmConfig,
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
