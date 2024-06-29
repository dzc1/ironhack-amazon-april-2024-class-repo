import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import AllTasksPage from "../pages/AllTasksPage.vue";
import CompletedTasksPage from "../pages/CompletedTasksPage.vue";
import AddTaskPage from "../pages/AddTaskPage.vue";
import AuthPage from "../pages/AuthPage.vue";
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";

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
    // How to build Nested Routes
    // Nested routes by default are structured as objects, that contain a nnested children key that allows for the addition of routes.
    {
      path: "/auth",
      name: "Parent structure for neted routes, only using a RouterView",
      component: AuthPage,
      // This is the new key you want to add if you want to have nested routes
      // By default if you use the children key, set the valyue to a ARRAY
      // Inside the array you have to specify a object much like the one you strctured in this file.
      children: [
        // Nested Route #1
        // route sturcture:
        // path:  /auth/login
        {
          path: "login",
          name: "Login Nested Route",
          component: SignIn,
        },
        // Nested Route #2
        // route sturcture:
        // path:  /auth/register
        {
          path: "register",
          name: "Register Nested Route",
          component: SignUp,
        },
      ],
    },
  ],
});

export default router;
