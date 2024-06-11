<!-- HTML -->
<template>
  <p class="message">
    {{ message }}
  </p>
</template>

<!-- JS  -->
<script setup>
// This way - simple and straightForward
defineProps({
  message: String,
});

// Expanded Way
// defineProps({
//   message: {
//     type: String,
//     default: "This is the body of a Tweet that has not been loaded....",
//   },
// });
</script>
