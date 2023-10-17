import { VueTelInputConstructor } from 'vue-tel-input';

export default defineNuxtPlugin((nuxtApp: any) => {
  // Import and use VueTelInput with your Nuxt 3 app
  import('vue-tel-input').then(({ default: VueTelInput }) => {
    nuxtApp.vueApp.use(VueTelInput);
  });
});