<template>
  <div class="container">
    <div class="header">
      <div class="header-description">
        <h3 class="header-title">Register to ToDo App</h3>
        <p class="header-subtitle">Start organizing your tasks!</p>
      </div>
    </div>

    <form @submit.prevent="signUp" class="form-sign-in">
      <div class="form">
        <div class="form-input">
          <label class="input-field-label">E-mail</label>
          <input
            type="email"
            class="input-field"
            placeholder="example@gmail.com"
            id="email"
            v-model="formState.email"
            required
          />
        </div>
        <div class="form-input">
          <label class="input-field-label">Password</label>
          <input
            type="password"
            class="input-field"
            placeholder="**********"
            id="password"
            v-model="formState.password"
            required
          />
        </div>
        <div class="form-input">
          <label class="input-field-label">Confirm password</label>
          <input
            type="password"
            class="input-field"
            placeholder="**********"
            id="confirmPassword"
            v-model="formState.confirmPassword"
            required
          />
        </div>
        <button class="button" type="submit">Sign Up</button>
        <p>
          Have an account?
          <PersonalRouter
            :route="goToRoute"
            :buttonText="buttonText"
            class="sign-up-link"
          />
        </p>
      </div>
    </form>

    <div v-show="formState.errorMsg">{{ formState.errorMsg }}</div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import PersonalRouter from "./PersonalRouter.vue";
import { useUserStore } from "../stores/user";

// Introduction:
// This component handles the sign-up process for the ToDo App using a reactive object to manage form states,
// improving structure and reactivity handling.

// Route Variables for navigating users
// Remember they are just storing strings
// Not reactive in nature, so nor eff or reactive
const goToRoute = "/auth/login";
const buttonText = "Sign In";

// Consolidating input fields and error messages into a reactive object
const formState = reactive({
  email: "",
  password: "",
  confirmPassword: "",
  errorMsg: "",
});

// Router instance for navigation
const router = useRouter();
// Store user accessed easily here
const userStore = useUserStore();

// Function to handle the SignUp process
const signUp = () => {
  // 1st - Conditional Logic only using a simple IF statement
  if (formState.password === formState.confirmPassword) {
    try {
      // Utilizes the signUp function from the user store to register the user
      userStore.register(formState.email, formState.password);
      // On successful sign up, redirect the user to the login page
      router.push({ path: goToRoute });
    } catch (error) {
      // On failure, display an error message
      formState.errorMsg = error.message;
      // Automatically clear the error message after 5 seconds
      setTimeout(() => {
        formState.errorMsg = "";
      }, 5000);
    }
    return;
  }
  // 2nd - Sets error message if passwords do not match
  formState.errorMsg = "Passwords do not match. Please try again.";
  setTimeout(() => {
    formState.errorMsg = "";
  }, 2000);
};
</script>

<style>
/* Style section remains unchanged */
</style>
