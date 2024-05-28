<!-- HTML -->
<template>
  <div class="comps">
    <h3>My first reactive component</h3>

    <!-- Using a reactive string through the ref() method -->
    <p>{{ myIntro }}</p>

    <!-- Using a reactive number through the ref() method -->
    <p>{{ myAge }}</p>

    <!-- Using a reactive boolean through the ref() method -->
    <p>{{ booleanValue }}</p>

    <!-- Using a reactive array through the reactive() method -->
    <p>{{ favoriteFoods }}</p>
    <p>{{ favoriteFoods[0] }}</p>

    <!-- Using a reactive object through the reactive() method -->
    <p>{{ favoriteFoodObject.latinAmerica }}</p>
    <!-- Using a reactive object through the reactive() method -->
    <p>
      My favorite food in the US is {{ favoriteFoodObject.northAmerica[1] }}
    </p>
    <!-- Example creating a counter -->
    <!-- Using Reactive -->
    <div>
      <h4>{{ counter.title }} - {{ counter.count }}</h4>
      <div class="counterBlock">
        <button v-if="counter.count === 0">Substract</button>

        <button v-else @click="substract">Substract</button>

        <p>Current Count is {{ counter.count }}</p>
        <button @click="add">Add</button>
      </div>
    </div>
  </div>
</template>

<!-- JS  -->
<script setup>
// To work with reactive data in Vue, we need to destructure two very important methods from the Vue library
// Ref method
// Reactive method
import { ref, reactive } from "vue";

// Data Type - String - Reactive - ref() method
let myIntro = ref(
  "My name is Diego and we are going to learn Vue! - Depending on a reactive variable"
);

// Data Type - Number - Reactive - ref() method
let myAge = ref(33);

// Data Type - Boolean - Reactive - ref() method
let booleanValue = ref(true);

// Reactive method
// This method is the one we want to use when working with non-primitive data types [Arrays or Objects]

// Data Type - Array - Reactive - reactive() method
let favoriteFoods = reactive(["Tacos", "5 Guys", "Pokes"]);

// Data Type - Object - Reactive - reactive() method
let favoriteFoodObject = reactive({
  europe: "Paella",
  latinAmerica: "Arepas",
  asia: "Sushi",
  northAmerica: ["Hot Dogs", "Burgers"],
});

// Example Using Reactiviy, inn particular usinng the reactive method
// Let's make a counter, that is, let's create a small one that helps us add and subtract
let counter = reactive({
  title: "This is my cool counter",
  count: 0,
});

// Functions thaat will help us counnt and once the user has reached '5' let's print an alert message
let add = () => {
  counter.count++;
  if (counter.count === 5) {
    alert(`Yay you have successfully counted to ${counter.count}`);
  }
};

let substract = () => {
  counter.count--;
};
</script>

<style scoped>
.counterBlock > button,
p {
  display: inline;
}
</style>
