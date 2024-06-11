<!-- HTML -->
<template>
  <img :src="image" class="profile" alt="profile" />
</template>

<!-- JS  -->
<script setup>
defineProps({
  image: String,
});
</script>
