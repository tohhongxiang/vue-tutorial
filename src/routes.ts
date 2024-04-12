import { createRouter, createWebHashHistory } from "vue-router";
import PageViewer from "./views/PageViewer.vue";
import CreatePage from "./views/CreatePage.vue";
import PageManager from "./views/PageManager.vue";
import PageList from "./views/PageList.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/:index?", component: PageViewer, props: true },
    {
      path: "/pages",
      component: PageManager,
      children: [
        { path: "", component: PageList },
        { path: "create", component: CreatePage },
      ],
    },
  ],
});

export default router;
