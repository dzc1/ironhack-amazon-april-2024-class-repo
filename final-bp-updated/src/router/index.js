// This file sets up the routing configuration for a Vue.js application using Vue Router.
// It defines the routes and their corresponding components, including nested routes for authentication pages.

// ------------------------------------------------------------------------
// Import Block
// ------------------------------------------------------------------------

// Import createRouter and createWebHistory from vue-router to set up the router
import { createRouter, createWebHistory } from "vue-router";
// Import page components for routing
import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import AllTasksPage from "../pages/AllTasksPage.vue";
import CompletedTasksPage from "../pages/CompletedTasksPage.vue";
import AddTaskPage from "../pages/AddTaskPage.vue";
import AuthPage from "../pages/AuthPage.vue";
// Import components for nested routes
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";

// ------------------------------------------------------------------------
// Router Configuration Block
// ------------------------------------------------------------------------

// Create a new router instance
const router = createRouter({
  // Use createWebHistory for history mode routing
  history: createWebHistory(import.meta.env.BASE_URL),
  // Define the routes for the application
  routes: [
    {
      path: "/", // Path for the home page
      name: "home", // Name of the route
      component: HomePage, // Component to render
    },
    {
      path: "/about", // Path for the about page
      name: "about", // Name of the route
      component: AboutPage, // Component to render
    },
    {
      path: "/all-tasks", // Path for the all tasks page
      name: "all tasks page", // Name of the route
      component: AllTasksPage, // Component to render
    },
    {
      path: "/completed-tasks", // Path for the completed tasks page
      name: "completed tasks page", // Name of the route
      component: CompletedTasksPage, // Component to render
    },
    {
      path: "/add-task", // Path for the add task page
      name: "add new task page", // Name of the route
      component: AddTaskPage, // Component to render
    },
    // Nested routes for authentication
    {
      path: "/auth", // Parent path for authentication routes
      name: "Parent structure for nested routes, only using a RouterView", // Name of the route
      component: AuthPage, // Component to render
      // Define the nested routes
      children: [
        // Nested Route #1 for login
        {
          path: "login", // Path for the login route
          name: "Login Nested Route", // Name of the route
          component: SignIn, // Component to render
        },
        // Nested Route #2 for register
        {
          path: "register", // Path for the register route
          name: "Register Nested Route", // Name of the route
          component: SignUp, // Component to render
        },
      ],
    },
  ],
});

// Export the router instance
export default router;

/*
Summary:
This file defines the routing configuration for a Vue.js application. It includes routes for home, about, all tasks, completed tasks, and add task pages. It also sets up nested routes for authentication (login and register) under the "/auth" path. The router is configured using createRouter and createWebHistory from vue-router.
*/
