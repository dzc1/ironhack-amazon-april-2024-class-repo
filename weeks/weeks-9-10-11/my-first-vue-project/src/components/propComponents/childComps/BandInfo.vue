<!-- HTML -->
<template>
  <h2>{{ bandNameChild }}</h2>
  <h4>{{ bandGenreChild }}</h4>
</template>

<!-- JS  -->
<script setup>
import { ref, reactive, computed } from "vue";

//Props defiition here:
defineProps({
  bandNameChild: String,
  bandGenreChild: String,
});
</script>

<!-- CSS -->
<!-- The scoped attribute means that only the CSS properties available inside this style tag will be applied inside this component and ONLY This component -->
<style scoped></style>

<!-- Vue Component Tips -->
<!-- 1. Always name your component in PascalCase, ex: MyFirstComponent -->
<!-- 2. Vue.js components have a .vue extension file -->
<!-- 3. TO AVOID ANY CONFUSIONN, YOU CAN COPY THIS FILE AND DELETE THE COMMENTS TO GET YOU STARTED -->
