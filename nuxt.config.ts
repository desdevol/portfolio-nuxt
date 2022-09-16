// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-icon'],
    css: ['@/assets/style.scss', '@egjs/vue3-flicking/dist/flicking.css'],
    app: {
        head: {
            title: 'Desdevol',
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        },
    },
})
