import { createRouter, createWebHistory } from "vue-router";
import TheHome from "./components/pages/TheHome.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TheHome },
    // { path: "/coaches", component: CoachesList },
    // {
    //   path: "/coaches/:id",
    //   component: CoachDetail,
    //   props: true,
    //   children: [{ path: "contact", component: ContactCoach }],
    // },
  ],
});

export default router;
