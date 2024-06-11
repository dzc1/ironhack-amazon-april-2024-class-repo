<!-- HTML -->
<template>
  <div class="events-buttons">
    <!-- Here we are using the full directive "v-on" + the "click" event so that the user can add +1 to the variable -->
    <!-- INLINE -->
    <button v-on:click="count++">
      Add +1 - using the full directive + depending on an inline event
    </button>
    <p>The current count is: {{ count }}</p>
  </div>
  <!-- click -->
  <div class="events-buttons">
    <button @click="substractCountTwo">
      Subtract -1 - using the event directive 'click' with 'SHORTHAND' +
      depending on a function
    </button>
    <p>The current count is: {{ countTwo }}</p>
  </div>
  <!-- DOuBLE CLICK -->
  <div class="events-buttons">
    <button @dblclick="substractCountTwo">
      Subtract -1 - using the event directive 'click' with 'SHORTHAND' +
      depending on a function
    </button>
    <p>The current count is: {{ countTwo }}</p>
  </div>
  <!-- Mouse/Trackpad Events -->
  <div>
    <h2
      @mouseenter="favoriteFoodHoveChange"
      @mouseleave="favoriteFoodChangeTwo"
      @click="helloClass"
    >
      {{ favoriteFood }}
    </h2>
  </div>

  <!-- WORKING WITH INNPUT EVENTS -->
  <div class="evennt-inputs">
    <label for="inputOne">@input event inside the input</label>
    <input
      @input="clickInputAdd"
      type="text"
      name="inputOne"
      id="inputOne"
      :value="countInputVar"
    />
  </div>
  <div class="events-inputs">
    <label for="inputOne">@keydown event inside the input</label>
    <input
      @keydown="clickInputAdd"
      type="text"
      name="inputOne"
      id="inputOne"
      :value="countInputVar"
    />
  </div>
  <div class="events-inputs">
    <label for="inputOne">@keyup event inside the input</label>
    <input
      @keyup="clickInputAdd"
      type="text"
      name="inputOne"
      id="inputOne"
      :value="countInputVar"
    />
  </div>
  <div class="events-inputs">
    <label for="inputOne">
      event triggered only ny the space key of your keyboArd inside the
      input</label
    >
    <input
      @keypress.space="clickInputAdd"
      type="text"
      name="inputOne"
      id="inputOne"
      :value="countInputVar"
    />
  </div>
</template>

<!-- JS  -->
<script setup>
import { ref, reactive, computed } from "vue";

// Working with Events
let count = ref(0);

let countTwo = ref(0);
const substractCountTwo = () => {
  console.log(countTwo.value);
  countTwo.value--;
};

// working with mouse events
// Lets generate a reacitve variabkle to store a string
let favoriteFood = ref("Pizza");
let favoriteFoodHoveChange = () => {
  favoriteFood.value = "Tacos";
};
let favoriteFoodChangeTwo = () => {
  favoriteFood.value = "Sushi";
};
let helloClass = () => alert("hello there....");

// Workinng with iput event types
let countInputVar = ref(0);
let clickInputAdd = () => {
  countInputVar.value++;
};
</script>

<style scoped>
.forms {
  padding: 1rem 0;
}
p {
  font-size: 2em;
}
button {
  margin: 1 2rem;
  height: 64px;
  background: rgb(69, 69, 241, 0.8);
  border: none;
  color: white;
  font-size: 1.5em;
}

.event-inputs,
.event-buttons,
.event-mouse,
.form-labels,
.script-dependant-logic,
.function-with-events {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem 0;
}
.event-inputs label {
  margin: 0 0 1rem 0;
}

label,
input {
  font-size: 2em;
}

.form-labels button {
  width: 100%;
}
</style>

<!-- 
What are events in Vue.js?

Events in Vue.js are mechanisms that allow you to listen for user interactions or other events triggered by the browser, and respond to them by executing specific code. Common events include clicks, input changes, form submissions, and more. In Vue.js, you can handle these events using the `v-on` directive (or its shorthand `@`).

Why are events used in Vue.js?

Events are used in Vue.js to create interactive and dynamic web applications. By responding to user actions, you can make your application more responsive and engaging. For example, you might use events to validate user input, submit forms, navigate between views, or update the data displayed on the screen. Events help you manage and react to user interactions efficiently, keeping the user interface in sync with the underlying data model.

Using events in Vue.js allows you to:
1. Enhance user interactivity by executing code in response to user actions.
2. Update the application's state based on user inputs or other triggers.
3. Communicate between parent and child components using custom events.
4. Implement form handling, data validation, and dynamic content updates.
5. Simplify event handling with the `v-on` directive or its shorthand `@`.

By leveraging events, you can build more interactive, user-friendly, and maintainable applications in Vue.js.
-->
