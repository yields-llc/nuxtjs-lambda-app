// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    inlineDynamicImports: true,
    preset: 'aws-lambda',
    serveStatic: true,
    output: {
      publicDir: '.output/server',
    }
  }
})
