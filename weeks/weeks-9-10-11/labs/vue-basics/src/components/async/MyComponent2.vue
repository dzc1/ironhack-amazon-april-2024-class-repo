<template>
  <p>Componente Async2</p>
  <p>{{ name }}</p>
</template>

<script setup>
const props = defineProps({
  name: String,
});
</script>
