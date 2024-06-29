<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Final Boiler Plate" />

      <nav>
        <template v-if="!isUserloggedIn">
          <!-- ELSE - USER IS NOT LOGGED SHOW THESE -->
          <RouterLink to="/auth/login">Login</RouterLink>
          <RouterLink to="/auth/register">Register</RouterLink>
        </template>
        <template v-else>
          <!-- IF USER IS LOGGED IN - SHOW THESE -->
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/all-tasks">All Tasks</RouterLink>
          <RouterLink to="/completed-tasks">Completed Tasks</RouterLink>
          <RouterLink to="/add-task">Add New Task</RouterLink>
          <button @click="handleSignOut">Sign Out</button>
        </template>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { ref, onMounted, onUpdated } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useUserStore } from "../src/stores/user";

// Router instance for navigation
const router = useRouter();
// Store user accessed easily here
const userStore = useUserStore();
// We are destructuring the variable 'user' out of the whole store, WHILE keepiung it's reactivity using the storeToRefs method from PINIA
const { user } = storeToRefs(userStore);
// Let's genrate a simple boolean reactive variable to hide/show things
const isUserloggedIn = ref(false);

// USING THE ONMOUNTED LIFECYCLE HOOK
// 1 - import it much like you do a ref or reactive method
// 2 - Define it inside the script tag alone
// 3 - Inside the method meaning, the parenthesis, define an anonymous arrow function
// 4 - Propagte the body of the function
onMounted(() => {
  console.log("hello calling function");
  try {
    // 1st - We call the cfetchUser() from the store
    userStore.fetchUser();
    // 2nd - Condition
    // 2.1 - NEGATIVE case where there is no user
    // 2.1 if there is no user object inside the LOCALSTORAGE, we are going to redirect user outside of homePage
    if (!user.value) {
      // to Push the user to a route specifically for them to log in
      router.push({ path: "/auth/login" });
    }
    // 2.2 POSITIVE CASE WHERE THERE IS A USER STORED WITHIN LOCALSTORAGE
    // 2.2 els, if there is a user, redirect the user to the corfect path, if user is in existing path already, dop not redirect anywhere else :)
    else {
      isUserloggedIn.value = !!user.value; // Update the reactive variable on line 36, depending if there is any data inisde the userVariable from the store.
      router.push({ path: "/" });
    }
  } catch (error) {
    console.log(error);
  }
});

// Function to SignOut USER from DB & re-direct user back to login route
let handleSignOut = () => {
  // 1st - call the store and inside the store call the signOut function
  userStore.signOut();
  // 2nd - Redirect user back to login page
  router.push({ path: "/auth/login" });
  // 3rd swap back value from isUserLoggedIn to false
  isUserloggedIn.value = false;
};

// USING THE ONUPDATED LIFECYCLE HOOK
// 1 - import it much like you do a ref or reactive method
// 2 - Define it inside the script tag alone
// 3 - Inside the method meaning, the parenthesis, define an anonymous arrow function
// 4 - Propagte the body of the function
</script>

<!-- What is Store to Ref? 
In order to extract properties from the store while keeping its reactivity, you need to use storeToRefs(). It will create refs for every reactive property. This is useful when you are only using state from the store but not calling any action. Note you can destructure actions directly from the store as they are bound to the store itself too: -->
<!-- Link: https://pinia.vuejs.org/core-concepts/ -->
