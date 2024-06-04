<template>
  <p class="message">
    {{ message }}
  </p>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: "Some Generic Tweet about a cute dog!",
  },
});

// Option 2 - not extending prop definition and info
// defineProps(["message"]);
</script>
