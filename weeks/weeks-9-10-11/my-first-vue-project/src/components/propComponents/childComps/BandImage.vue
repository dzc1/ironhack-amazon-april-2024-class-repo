<!-- HTML -->
<template>
  <!-- Image of band will be inyected here... -->
  <img :src="bandImgChild" :alt="`Image of the band ${bandNameChild}`" />
</template>

<!-- JS  -->
<script setup>
import { ref, reactive, computed } from "vue";

//Props defiition here:
defineProps({
  bandImgChild: String,
  bandNameChild: String,
});
</script>

<!-- CSS -->
<!-- The scoped attribute means that only the CSS properties available inside this style tag will be applied inside this component and ONLY This component -->
<style scoped>
img {
  width: 50%;
}
</style>

<!-- Vue Component Tips -->
<!-- 1. Always name your component in PascalCase, ex: MyFirstComponent -->
<!-- 2. Vue.js components have a .vue extension file -->
<!-- 3. TO AVOID ANY CONFUSIONN, YOU CAN COPY THIS FILE AND DELETE THE COMMENTS TO GET YOU STARTED -->
