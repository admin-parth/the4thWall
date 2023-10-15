

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        {rel:'stylesheet' , href:'https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,500i,600,600i,700,700i,800,800i'},
        {rel:'stylesheet' , href:'https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i&display=swap'},
        {rel:'stylesheet' , href:'https://fonts.googleapis.com/css?family=Rubik:400,400i,500,500i,700,700i'}
      ]
    },
  },
  css:['~/assets/scss/app.scss' ,],
  ssr:true,
  script:[
      {
        src:'/bootstrap.bundle.min.js'
      }
  ],
  // alias: {
  //   pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  // },
  modules: ['nuxt-icon','@pinia/nuxt'],
  pinia: {
    autoImports: [
      'defineStore', 
      ['defineStore', 'definePiniaStore'],
    ],
  },
 
  plugins:[
    {
      src:"~/plugins/plugins.ts",
      mode:'client'
    },
    {
      src:'~/plugins/usebootstrap.client.ts',
      mode:'client'
    },
    {
      src:'~/plugins/vue-masonry-wall.ts'
    }
  ]
});
