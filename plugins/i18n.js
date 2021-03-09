const i18n = [
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
        fr: require("../src/locales/fr-fr.json"), // Messages files
        es: require("../src/locales/es-es.json"),
        en: require("../src/locales/en-gb.json"),
        ru: require("../src/locales/ru-ru.json"),
        be: require("../src/locales/be-be.json"),
      },
    },
  },
]

module.exports = i18n
