import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
    css: ['@/assets/style.scss'],
    head: {
        title: 'Desdevol',
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    },
})
