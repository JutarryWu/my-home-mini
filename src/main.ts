import { createSSRApp } from "vue";
import * as Pinia from "pinia";
import piniaPersist from "pinia-plugin-persist-uni";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from "./App.vue";

const pinia = Pinia.createPinia()
// pinia.use(piniaPersist)
pinia.use(piniaPluginPersistedstate)

export function createApp() {
  const app = createSSRApp(App);
  app.use(pinia)
  return {
    app,
    Pinia
  };
}
