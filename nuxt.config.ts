// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    modules: [
        "nuxt-icon",
        "@pinia/nuxt",
        "@nuxt/image",
        "@vueuse/nuxt",
        "@nuxtjs/tailwindcss",
        "nuxt-vitest",
        "nuxt-headlessui",
    ],

    components: [
        {
            path: "~/components",
            pathPrefix: false,
        },
    ],
});
