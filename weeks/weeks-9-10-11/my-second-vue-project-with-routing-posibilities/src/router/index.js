import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";
import InfoAboutSong from "../pages/LikeARollingStone.vue";
import SongList from "../pages/SongList.vue";
import SongDetails from "../pages/SongDetails.vue";
import Bio from "../components/Bio.vue";

const router = createRouter({
  // This key allows for the project to have access to the memory of the browswer and in simpler terms, it allows you to go abck and forth between pages with the browsers back aand forth features that are lways located to the left side of the URL
  history: createWebHistory(import.meta.env.BASE_URL),
  // This key by default, sets up an array of OBJECTS
  // EACH OBJECT CONTAINS INFORMATION ABOUT A PAGE IN YOUR PROJECT
  routes: [
    // Each object within  the array signifies a page
    {
      path: "/", // Actual path that the URL will read in order to display your page
      name: "home", // Referential key that is given forengineers to have context of what this route is doing or pointing to
      component: HomeView, // This key contains the reference to the file which can be stored inside your views folder or your componets folder, because if you check both folders you will that both contain files with extension names .vue
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // It contains an anonymous arrow function that inside the body of the function uses a method called the import() and inside we pass the route pertaining to the file/VueComp that lives inside the views folder
      // This approach is good for working with bigALgo's (math operations that are much like trading platforms)
      component: () => import("../pages/AboutView.vue"),
    },
    // Each object within  the array signifies a page
    {
      path: "/like-a-rolling-stone", // Actual path that the URL will read in order to display your page
      name: "A page about the song like a rollinng stone form bob dylan", // Referential key that is given forengineers to have context of what this route is doing or pointing to
      component: InfoAboutSong, // This key contains the reference to the file which can be stored inside your views folder or your componets folder, because if you check both folders you will that both contain files with extension names .vue
    },
    {
      path: "/bio", // Actual path that the URL will read in order to display your page
      name: "A page about aa little bio about me", // Referential key that is given forengineers to have context of what this route is doing or pointing to
      component: Bio, // This key contains the reference to the file which can be stored inside your views folder or your componets folder, because if you check both folders you will that both contain files with extension names .vue
    },
    // This a sttatic route config
    {
      // This is a dynamic readable path!
      // If you use two dots anywehre in this path key, it means that the word after the two dots will be swaped for a dynamic value
      path: "/songList", // Actual path that the URL will read in order to display your page
      name: "Object config that will be using a page to display a list of song information", // Referential key that is given forengineers to have context of what this route is doing or pointing to
      component: SongList, // This key contains the reference to the file which can be stored inside your views folder or your componets folder, because if you check both folders you will that both contain files with extension names .vue
    },
    // DYNAMIC ROUTING OBJECTS
    {
      // This is a dynamic readable path!
      // If you use two dots anywehre in this path key, it means that the word after the two dots will be swaped for a dynamic value
      path: "/songList/:songTitle", // Actual path that the URL will read in order to display your page
      name: "this object contains the config for a dynamic route, which means, it will use/read information from the url to have the possiblity to work with dynamic data", // Referential key that is given forengineers to have context of what this route is doing or pointing to
      component: SongDetails, // This key contains the reference to the file which can be stored inside your views folder or your componets folder, because if you check both folders you will that both contain files with extension names .vue
    },
  ],
});

export default router;
