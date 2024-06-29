<!-- COMPONENTE BOILERPLATE -->
<template>
  <div class="container">
    <h3 class="header-title">Log In to ToDo App</h3>
    <!-- FORM GOES HERE -->
    <form @submit.prevent="signIn">
      <div class="form">
        <!-- Email Input -->
        <label
          >Email<input id="email" type="text" v-model="formState.email"
        /></label>
        <!-- Password Input -->
        <label
          >Password<input
            id="password"
            type="password"
            v-model="formState.password"
        /></label>
        <!-- Buttton -->
        <!-- This works -->
        <!-- <input type="button" value="Log In" /> -->
        <!-- I personally like semantic elements, i think they are easier to read as an engineer, so -->
        <button type="submit">Log In</button>
      </div>
    </form>
    <!-- END FORM -->
    <!-- --- -->
    <!-- --- -->
    <!-- Error Message Here -->

    <p v-show="formState.errorMsg">{{ formState.errorMsg }}</p>

    <!-- END Error Message  -->

    <p>
      Dont have an account?
      <PersonalRouter
        :route="route"
        :buttonText="buttonText"
        class="sign-up-link"
      />
    </p>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import PersonalRouter from "./PersonalRouter.vue";
import { useUserStore } from "../stores/user";

// Introduction:
// This component handles the log-in process for the ToDo App using a reactive object to manage form states,
// ensuring efficient state management and reactivity.

// Route Variables for navigating users
const route = "/auth/register";
const buttonText = "Sign Up";

/// Let's use a reactive variable to store (email, password, errorMsgs) - 3 keys iside
const formState = reactive({
  email: "",
  password: "",
  errorMsg: "",
});

// Router instance for navigation
const router = useRouter();
// Store user accessed easily here
const userStore = useUserStore();

/**
 * Function to handle the SignIn process.
 * It validates the user's credentials using the signIn function from the user store.
 * On success, it redirects the user to the home page.
 * On failure, it displays an error message.
 */
let signIn = () => {
  try {
    // 1- Hitting the user store, and hitting a function that is uses to LOG IN
    userStore.signIn(formState.email, formState.password);
    // 2 - ReRoute the user to the home page
    router.push({ path: "/" });
  } catch (error) {
    // On failure, let's display an error message
    formState.errorMsg = error.message;
    // Hide this error message after a specific time
    // Hide after 3 seconds, remember that is using always milliseconds
    setTimeout(() => {
      formState.errorMsg = "";
    }, 8000);
  }
};
</script>

<style scoped>
label,
input {
  display: block;
}
button {
  margin: 0.5rem 0;
}
</style>
