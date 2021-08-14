// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    app: {
        buildAssetsDir: "/static/",
        rootId: "app",
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1.0, maximum-scale=5.0",
        }
    },
    modules: [
        "@nuxt/image",
        "@nuxtjs/tailwindcss"
    ],
    image: {
        domains: ["avatars.githubusercontent.com"]
    }
})
