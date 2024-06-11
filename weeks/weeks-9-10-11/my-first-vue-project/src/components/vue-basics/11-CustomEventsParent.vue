<!-- HTML -->
<template>
  <h1>parent</h1>
  <Child
    @myFirstEmit="logicExecutedFromParentTwo"
    @clickEventTypeDiego="logicExecutedFromParent"
    @myEmitThatSendsInfo="viewNumberCountWithinChildComp"
  />
  <h2>The value is {{ numberHolder }}</h2>
</template>

<!-- JS  -->
<script setup>
import { ref, reactive, computed } from "vue";
import Child from "./12-CustomEventsChildren.vue";

let logicExecutedFromParent = () =>
  alert("Hello there students, this is beingn executed form the APP.vue");

let logicExecutedFromParentTwo = () => {
  alert("hello there class....");
};

let numberHolder = ref(0);
let viewNumberCountWithinChildComp = (emitInfo) => {
  numberHolder.value = emitInfo;
  alert(emitInfo);
};
</script>

<!-- CSS -->
<!-- The scoped attribute means that only the CSS properties available inside this style tag will be applied inside this component and ONLY This component -->
<style scoped></style>

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
