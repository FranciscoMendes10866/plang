import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./../node_modules/spectre.css/dist/spectre.min.css";
import "./../node_modules/spectre.css/dist/spectre-exp.min.css";
import "./../node_modules/spectre.css/dist/spectre-icons.min.css";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
