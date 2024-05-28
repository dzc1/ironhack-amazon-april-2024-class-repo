<!-- HTML -->
<template>
  <div class="comps">
    <h3>My first component</h3>
    <p>{{ myIntro }}</p>
    <p>{{ myAge }}</p>
    <p>{{ favoriteFoods }}</p>
    <p>{{ favoriteFoods[0] }}</p>
    <p>{{ favoriteFoodObject }}</p>
    <p>{{ favoriteFoodObject.europe }}</p>
    <p>{{ 2 * 4 }}</p>

    <!-- IMPORTANT DOING THIS SYNTAX, will prompt an error -->
    <!-- <p>{{ let myName = "Diegooooo" }}</p> -->
  </div>
</template>

<!-- JS  -->
<script setup>
// Text Interpolation
// AKA - Also known as "Mustache Syntax"

// {{}} inside of your template, simply mean that they are referencing something inside your scriptTag.

// Data Type - String
let myIntro =
  "My name is Diego and we are going to learn Vue! - Depending on a variable";
// Data Type - Number
let myAge = 33;
// Data Type - Array
let favoriteFoods = ["Tacos", "5 Guys", "Pokes"];
// Data Type - Object
let favoriteFoodObject = {
  europe: "Paella",
  latinAmerica: "Arepas",
  asia: "Sushi",
};

// THIS IS NOT REACTIVE IN VUE STANDARDS
</script>

<!-- CSS -->
<!-- The scoped attribute means that only the CSS properties available inside this style tag will be applied inside this component and ONLY This component -->
<style scoped></style>

<!-- Vue Component Tips -->
<!-- 1. Always name your component in PascalCase, ex: MyFirstComponent -->
<!-- 2. Vue.js components have a .vue extension file -->
<!-- 3. TO AVOID ANY CONFUSIONN, YOU CAN COPY THIS FILE AND DELETE THE COMMENTS TO GET YOU STARTED -->
