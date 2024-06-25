<!-- COMPONENTE BOILERPLATE -->

<template>
  <div class="container">
    <h3 class="header-title">Log In to ToDo App</h3>
    <p class="header-subtitle">
      We are on the login route. Here you should create a form with the
      corresponding logic so that it allows the user to log in with their email
      and password. Take a look at the SignUp logic if you need inspiration :)
    </p>
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
import PersonalRouter from "./PersonalRouter.vue";

// Route Variables
const route = "/register";
const buttonText = "Sign Up";

// Arrow function to Signin user to supaBase
const signIn = async () => {
  try {
  } catch (error) {}
};
</script>

<style></style>
