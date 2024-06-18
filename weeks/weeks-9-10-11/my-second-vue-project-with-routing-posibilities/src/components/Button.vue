<!-- JS -->
<script setup>
defineProps({
  buttonInfo: {
    type: String,
    required: true,
  },
});
</script>

<!-- HTML -->
<template>
  <button>{{ buttonInfo }}</button>
</template>
