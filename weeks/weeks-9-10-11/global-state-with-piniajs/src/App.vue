<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Bulding a task app using pinia for global state" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/all-tasks">All Tasks</RouterLink>
        <RouterLink to="/completed-tasks">Completed Tasks</RouterLink>
        <RouterLink to="/add-task">Add New Task</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
