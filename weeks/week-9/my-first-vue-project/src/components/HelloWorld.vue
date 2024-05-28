<!-- JS -->
<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>
<!-- HTML -->
<template>
  <h1>{{ msg }}</h1>
  <div>
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<!-- CSS -->
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
