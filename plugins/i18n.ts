import { createI18n } from 'vue-i18n'
import fr from "~/static/data/fr.json";
import es from "~/static/data/es.json";
import en from "~/static/data/en.json";
import ar from "~/static/data/arb.json";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en:en,
      fr:fr,
      es:es,
      ar:ar,
    }
  })
  vueApp.use(i18n)
})