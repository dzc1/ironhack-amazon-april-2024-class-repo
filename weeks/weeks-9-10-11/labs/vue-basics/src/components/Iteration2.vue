<template>
  <div id="excercise-2-part-1">
    <h1>{{ 2 + 2 }}</h1>
  </div>
  <div id="excercise-2-part-2">
    <h1>SImple sum of 2 numbers</h1>

    <input type="text" v-model="number1" />
    <span>+</span>
    <input type="text" v-model="number2" />
    <div>Result: {{ result }}</div>
  </div>

  <div class="lab">
    <h1>{{ stringLabf() }}</h1>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

//Iteration 2 - printing a string onto template via a func
const stringLabf = () => {
  return "Printing a String using a function";
};

// Iteration 2 - Computed with a mathematical func
const number1 = ref("0");
const number2 = ref("0");

const result = computed(() => {
  return parseInt(number1.value) + parseInt(number2.value);
});
</script>

<style></style>
