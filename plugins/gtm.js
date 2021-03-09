const gtm = [
  {
    use: "gridsome-plugin-gtm",
    options: {
      id: process.env.GTM_ID,
      enabled: true,
      debug: true,
    },
  },
]
module.exports = gtm
