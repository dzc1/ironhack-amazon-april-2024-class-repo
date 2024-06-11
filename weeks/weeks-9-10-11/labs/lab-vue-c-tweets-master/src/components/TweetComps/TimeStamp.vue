<!-- HTML -->
<template>
  <span class="timestamp"> {{ timeStamp }}</span>
</template>

<!-- JS  -->
<script setup>
defineProps({
  timeStamp: String,
});
</script>
