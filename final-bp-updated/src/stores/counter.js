// This file comes by defsult when you ccreate  a project using PINIA.js
// Its an informational file that shows you how to structure a store in Pinia.

// the defineStorew method allows for the creation of a store in pinia
import { ref, computed } from "vue";
import { defineStore } from "pinia";

// this is an exported variable by default because if you look at the beggining we have the reserved keyword "export"
// Inside the method defineStore(), you pass two arguments.

// 1st. arg === a string to just give a name for the store, pure referential
// 2ndd. arg === an anoonymous arrow function expression
// Syntax of arrow funcs:  () => {}

export const useCounterStore = defineStore("counter", () => {
  // Inside of the arrow function of the store, you can place your reactive datya or your functions to be consumed globally

  // Reactive variable thAt stores a number
  const count = ref(400);
  // This is a reactive variable, that uses the computed method to take a look into the count variable above and then multiply it's value by 2
  const doubleCount = computed(() => count.value * 2);

  // A function that is taking care of calling the 'count' variable and adding +1 using the ++ operator
  function increment() {
    count.value++;
  }

  // Have a return keyword to notfiy the function of the data/state (which can be either reactive variables or functions) to be able to be consumed globally throughout the project.
  return { count, doubleCount, increment };
});
