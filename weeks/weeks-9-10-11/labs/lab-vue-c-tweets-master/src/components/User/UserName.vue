<!-- HTML -->
<template>
  <span>{{ name }}</span>
</template>

<!-- JS  -->
<script setup>
import { ref, reactive, computed } from "vue";

defineProps({
  name: String,
});
</script>
