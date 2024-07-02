<template>
  <main class="container">
    <h4>About View</h4>
    <button @click="incrementNumberFunctionFromStore">Add +1</button>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useCounterStore } from "../stores/counter";
// 2nd wa
// A bit easier because we can store the access of the store inside a variable which we then reference easier (take a look at the example with the vaar name 'countNumber')
let countStore = useCounterStore();

// -----
// -----
// Consuming a piece of state that happens to be a function
// How do we do it ?
let incrementNumberFunctionFromStore = countStore.increment;
</script>
