const sourceGraphql = [
  {
    use: "@gridsome/source-graphql",
    options: {
      url: process.env.API_URL,
      fieldName: "strapi",
      typeName: "strapiTypes",
    },
  },
]
module.exports = sourceGraphql
