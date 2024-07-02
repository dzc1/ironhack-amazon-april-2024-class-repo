<!--
This file defines a Vue.js component for the sign-up process in a to-do application.
By building this component, we will achieve a user interface that allows users to register by providing their email and password, with state management handled by Pinia.js.
-->

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
        <!-- Email Input Field -->
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
        <!-- Password Input Field -->
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
        <!-- Confirm Password Input Field -->
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
        <!-- Sign Up Button -->
        <button class="button" type="submit">Sign Up</button>
        <p>
          Have an account?
          <!-- PersonalRouter component for navigation -->
          <PersonalRouter
            :route="goToRoute"
            :buttonText="buttonText"
            class="sign-up-link"
          />
        </p>
      </div>
    </form>

    <!-- Display error message if any -->
    <div v-show="formState.errorMsg">{{ formState.errorMsg }}</div>
  </div>
</template>

<script setup>
// ------------------------------------------------------------------------
// Import Block
// ------------------------------------------------------------------------

// Importing reactive from Vue to create a reactive form state object
import { reactive } from "vue";
// Importing useRouter from vue-router for navigation
import { useRouter } from "vue-router";
// Importing PersonalRouter component for navigation links
import PersonalRouter from "./PersonalRouter.vue";
// Importing the useUserStore function from userStore to interact with the user store
import { useUserStore } from "../stores/user";

// ------------------------------------------------------------------------
// Variables Block
// ------------------------------------------------------------------------

// Route Variables for navigating users
// Remember they are just storing strings
// Not reactive in nature, so nor eff or reactive
const goToRoute = "/auth/login";
const buttonText = "Sign In";

// Consolidating input fields and error messages into a reactive object
const formState = reactive({
  email: "", // Stores the email input
  password: "", // Stores the password input
  confirmPassword: "", // Stores the confirm password input
  errorMsg: "", // Stores any error messages
});

// Router instance for navigation
const router = useRouter();
// Store user accessed easily here
const userStore = useUserStore();

// ------------------------------------------------------------------------
// Functions Block
// ------------------------------------------------------------------------

// Function to handle the SignUp process
const signUp = () => {
  // Conditional Logic only using a simple IF statement
  if (formState.password === formState.confirmPassword) {
    try {
      // Utilizes the register function from the user store to register the user
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
  // Sets error message if passwords do not match
  formState.errorMsg = "Passwords do not match. Please try again.";
  setTimeout(() => {
    formState.errorMsg = "";
  }, 2000);
};

/*
  The signUp function handles the registration process.
  - It checks if the passwords match and, if so, calls the register function from the user store to register the user.
  - On successful registration, it redirects the user to the login page.
  - If there is an error during registration, it displays an error message and clears it after 5 seconds.
  - If the passwords do not match, it sets an error message and clears it after 2 seconds.
  */
</script>

<style>
/* Style section remains unchanged */
</style>
