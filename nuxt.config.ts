export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },

    modules: ['@nuxtjs/tailwindcss', "@pinia/nuxt"],

    future: {
        compatibilityVersion: 4
    },

    css: ['./app/assets/css/main.css'],

    app: {
        head: {
            title: "Portfolio – Frontend Developer",
            meta: [
                { name: "description", content: "Frontend Developer Portfolio" }
            ]
        }
    }
})