// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    app: {
        buildAssetsDir: "/static/",
        rootId: "app",
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0",
        }
    },
    modules: [
        "@nuxt/ui",
        "@nuxt/image",
        "@nuxtjs/tailwindcss",
        "nuxt-simple-sitemap"
    ],
    image: {
        domains: ["avatars.githubusercontent.com"]
    },
    routeRules: {
        "/": {prerender: true},
    },
    runtimeConfig: {
        "api": {
            telegramBotToken: import.meta.env.VITE_TELEGRAM_BOT_TOKEN,
        }
    },
    vite: {
        logLevel: "info",
        optimizeDeps: {
            include: ["vue"],
            force: true,
        },
        css: {
            modules: {
                generateScopedName: "[hash:5]",
            }
        },
        build: {
            target: "esnext",
        },
        define: {
            "process.browser": {},
        },
    },
    sitemap: {
        autoLastmod: true,
    },
    experimental: {
        // asyncEntry: true,
        inlineSSRStyles: false
    }
})
