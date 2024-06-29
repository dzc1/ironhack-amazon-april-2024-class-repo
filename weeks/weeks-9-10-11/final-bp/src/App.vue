<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Final Boiler Plate" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/all-tasks">All Tasks</RouterLink>
        <RouterLink to="/completed-tasks">Completed Tasks</RouterLink>
        <RouterLink to="/add-task">Add New Task</RouterLink>
        <!-- Nested Routes - To be Changed  -->
        <RouterLink to="/auth/login">Login</RouterLink>
        <RouterLink to="/auth/register">Register</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
