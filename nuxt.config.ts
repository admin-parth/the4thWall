import dotenv from 'dotenv';

dotenv.config();
export default defineNuxtConfig({
  runtimeConfig: {
    dburl: process.env.MONGODB_URI,
    dbName: process.env.MONGODB_NAME,
    public:{
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    }
  },
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
    },
    {
      src:'~/plugins/vue-tel-input.ts',
      mode:'client'
    },
    {
      src:'~/plugins/vue3-otp-input.ts',
      mode:'client'
    },
    {
      src:'~/plugins/firebase.client.ts',
      mode:'client'
    },
    {
      src:'~/plugins/supabase.ts',
      mode:'client'
    }
  ]
});
