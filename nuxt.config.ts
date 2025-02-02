// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', 'nuxt-swiper', '@nuxt/image', '@nuxtjs/robots', 'nuxt-simple-sitemap'],
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }],
      meta: [
        { name: 'theme-color', content: '#ffffff', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#1e293b', media: '(prefers-color-scheme: dark)' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  colorMode: {
    fallback: 'dark',
    classSuffix: ''
  },
  image: {
    inject: true,
    format: ['webp']
  },
  css: ['~/assets/css/main.css'],
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],
  ssr: false
})