<template>
  <main class="container">
    <h4>Home View</h4>

    <!-- First way of consuming data from the store -->
    <!-- Even though is accesibble this can be hard to read, so get used to reading -->
    <p>{{ useCounterStore().count }}</p>

    <!-- Using 2nd way -->
    <p>{{ countNumber }}</p>
    <p>{{ doubleCountNumber }}</p>
    <button @click="incrementNumberFunctionFromStore">Add +1</button>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useCounterStore } from "../stores/counter";
// 2nd wa
// A bit easier because we can store the access of the store inside a variable which we then reference easier (take a look at the example with the vaar name 'countNumber')
let countStore = useCounterStore();

// This a good example of storing the data from the store neatly because it's easier to read.
// This is getting the 'count' variable form the store
// We use the computed method in this case to fet the real time value,. if not take a look at line "6"
let countNumber = computed(() => countStore.count);

// THIS HAS BEEN MOVED TO THE ABOUTVIEW
// // THis is getting the var called doubleCount which has a computed function inside
// // This a good example of storing the data from the store neatly because it's easier to read.
let doubleCountNumber = countStore.doubleCount;

// // -----
// // -----
// // Consuming a piece of state that happens to be a function
// // How do we do it ?
// let incrementNumberFunctionFromStore = countStore.increment;
</script>
