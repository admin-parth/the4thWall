import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public;
  const firebaseConfig = {
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId,
    appId: config.appId,
    measurementId: config.measurementId,
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  console.log(auth)
  nuxtApp.vueApp.provide('auth', auth)
  nuxtApp.provide('auth', auth)
});
