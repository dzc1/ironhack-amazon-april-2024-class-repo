import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import AllTasksPage from "../pages/AllTasksPage.vue";
import CompletedTasksPage from "../pages/CompletedTasksPage.vue";
import AddTaskPage from "../pages/AddTaskPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/all-tasks",
      name: "all tasks page",
      component: AllTasksPage,
    },
    {
      path: "/completed-tasks",
      name: "completed tasks page",
      component: CompletedTasksPage,
    },
    {
      path: "/add-task",
      name: "add new task page",
      component: AddTaskPage,
    },
  ],
});

export default router;
