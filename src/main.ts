import { createApp } from "vue";
import App from "./App.vue";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import $bus from "./utils/events";
import $pages from "./data";
import router from "./routes";

const app = createApp(App);

app.use(router);

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $bus: typeof $bus;
    $pages: typeof $pages;
  }
}

app.config.globalProperties.$bus = $bus;
app.config.globalProperties.$pages = $pages;

app.mount("#app");
