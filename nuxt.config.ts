// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    modules: ['@nuxthub/core'],
    hub: {
        // Optional: Enable NuxtHub features
        // database: true,  // Enable D1 database
        // kv: true,        // Enable KV storage
        // blob: true,      // Enable R2 blob storage
        // cache: true,     // Enable cache
    },
    future : {
        compatibilityVersion : 4
    }
})
