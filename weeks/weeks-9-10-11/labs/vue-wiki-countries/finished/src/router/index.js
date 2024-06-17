import { createRouter, createWebHistory } from "vue-router";
import CountryDetails from "../components/CountryDetails.vue";
import CountriesList from "../components/CountriesList.vue";

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory("/"),
  // funcion con nombre scrolllBehavior() == Function Convencional no es una f tipo flecha
  // esta funcx se encarga de una vez que le demos click a un pais, tendremos un scrol dentro de la pantalla
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
  routes: [
    {
      path: "/",
      name: "list",
      component: CountriesList,
      children: [
        {
          path: "/list/:alpha3Code",
          name: "list",
          component: CountryDetails,
        },
      ],
    },
  ],
});

export default router;
