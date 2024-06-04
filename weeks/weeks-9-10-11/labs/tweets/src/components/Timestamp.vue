<template>
  <span class="timestamp">{{ timestamp }}</span>
</template>

<script setup>
defineProps({
  timestamp: {
    type: String,
    default: () => {
      let date = new Date();
      return date.toISOString().split("T")[0];
    },
  },
});

// Option 2 - not extending prop definition and info
// defineProps(["timestamp"]);
</script>
