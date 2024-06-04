<script setup>
import Timestamp from "./Timestamp.vue";
defineProps({
  user: {
    type: Object,
    default: () => ({
      name: "Snopp Dogg",
      handle: "@Snoopy",
    }),
  },
  timestamp: {
    type: String,
  },
});

// Option 2 - not extending prop definition and info
// defineProps(["user"]);
</script>

<template>
  <!-- Iteration 1 - preRefactoring -->
  <!-- <span class="user">
    <span class="name">{{ user.name }}</span>
    <span class="handle">{{ user.handle }}</span>
  </span> -->

  <!-- Iteration 2 - postRefactoring -->
  <div class="top">
    <span class="name">{{ user.name }}</span>
    <span class="handle">{{ user.handle }}</span>
    <Timestamp v-bind:timestamp="timestamp" />
  </div>
</template>
