<!-- HTML -->
<template>
  <div class="cool-btns">
    <!-- Regular vue logic -->
    <button @click="clickMeInsideComp">
      Click me - reminder of click events
    </button>
    <!-- lets use the Emit keyword inside the template by accessing the keyword using a $ -->
    <button @click="$emit('clickEventTypeDiego')">
      Click me to listen from parent component
    </button>
    <!-- lets use a function to store the emit and separate a bit of logic out of the template.  -->
    <button @click="functionThatEmitsLogic">
      Click me to listen from parent, emit is defined inside function
    </button>
    <!-- Logic touse a fucnton to emit listening of event in parent and also sends information.  -->
    <button @click="functionThatEmitsLogicAndSendsInfo">
      Click me to listen from parent and emit with data
    </button>
  </div>
</template>

<!-- JS  -->
<script setup>
import { ref, reactive, computed } from "vue";

let clickMeInsideComp = () =>
  alert("hello class I AM LOGIC EXECTUED within the componnent didrectly...");

//   1. Define emit
// we save our defineEmits() in a variable to reference it inside our function.
let emits = defineEmits(["myFirstEmit", "myEmitThatSendsInfo"]);

// 2 use demit wherever you want, here happens to vbe a function.
let functionThatEmitsLogic = () => {
  emits("myFirstEmit");
};

// Emit Stored inside function that also, sends information upward to the parent component
let count = ref(2);
let functionThatEmitsLogicAndSendsInfo = () => {
  // WHENEVER YOU WANT TO SEND DATA UPWARD TO THE PARENT COMPONENT FROM THE CHILD, JUST EXPAND THE EMITS() METHOD WITH A , MUCH LIKE BELOW. AND THEN PASS THE DATA THAT YOU WANT.
  emits("myEmitThatSendsInfo", count.value);
};
</script>

<!-- CSS -->
<!-- The scoped attribute means that only the CSS properties available inside this style tag will be applied inside this component and ONLY This component -->
<style scoped>
button {
  display: block;
  margin: 1rem 0;
  width: 100%;
}
</style>

<!-- What are emits in Vue? 
"Emits" in Vue.js are used to send custom events from a child component to the parent component. The parent component can then listen for these events and respond to them as needed.

How are emits used in Vue?
To use an "emit" in Vue.js with the Composition API, you can define a custom event in the child component and use the "emit" function/method to trigger the event and pass data along with it -->

<!-- SYNTAX  -->

<!-- How to use the emit keyword inside the template?  -->
<!-- $emit() -->

<!-- How to use the emit keyword inside the script?  -->
<!-- emits() -->

<!-- What and Why Custom Events in Vue.js?

Custom events in Vue.js are a way to enable communication between components. They allow child components to send messages to parent components, informing them about changes or user interactions. Custom events are essential for creating reusable components that can be easily integrated into different parts of an application without tightly coupling them to parent components.

By using custom events, you can:
1. Decouple child and parent components, making your code more modular and reusable.
2. Pass data from child components to parent components efficiently.
3. Handle user interactions in child components and notify parent components to take necessary actions.
4. Maintain a clear flow of data and events, improving the maintainability of your code.

Using custom events makes your Vue.js applications more flexible and easier to manage, especially as they grow in complexity.
-->
