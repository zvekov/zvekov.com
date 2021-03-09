const sourceGraphqlConfig = [
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
]
module.exports = sourceGraphqlConfig
