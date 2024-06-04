<!-- iteration exercise:

Create a reactive object that contains information:

String - Name
Number- Age
Array - Favorite Music Bands
Object - 3 Keys
favoritePizzaType - String
favoriteDrinks -Array (multiple)
favoriteBurgertypes - Array (multiples)
Create a component andd. store this info aduse the v-for directive to loop through and display theinfo withinn the template -->

<template>
  <!-- <div v-for="(bands, index) in info" v-bind:key="index">
    <h1>Class Display</h1>
    <p>Name: {{ bands.fullName }}</p>
    <p>Age: {{ bands.Age }}</p>
    <p>Favorite bands:{{ bands.favouriteMusicBand }}</p>
    <p>favoritePizzaType: {{ bands.favoritePizzaType }}</p>
    <p>favouriteDrinks: {{ bands.favouriteDrinks }}</p>
    <p>FavoriteBurgerType: {{ bands.FavoriteBurgerType }}</p>
  </div> -->
  <div>
    <h1>Class Display</h1>
    <p>Name: {{ info.fullName }}</p>
    <p>Age: {{ info.Age }}</p>
    <p>Favorite Bands</p>
    <!-- Bands -->
    <ul>
      <li v-for="(band, index) in info.favouriteMusicBand" v-bind:key="index">
        {{ band }}
      </li>
    </ul>

    <!-- Pizza -->
    <p>Favorite Pizza</p>
    <ul>
      <li
        v-for="(individualPizzaType, index) in info.favoritePizzaType"
        v-bind:key="index"
      >
        {{ individualPizzaType }}
      </li>
    </ul>
    <!-- Drinks -->
    <p>Favorite Drinks</p>
    <ul>
      <li v-for="(drink, index) in info.favouriteDrinks" v-bind:key="index">
        {{ drink }}
      </li>
    </ul>
    <!-- Burgers -->
    <p>Favorite Burger</p>
    <ul>
      <li v-for="(burger, index) in info.FavoriteBurgerType" v-bind:key="index">
        {{ burger }}
      </li>
    </ul>
  </div>
</template>
<!-- JS  -->
<script setup>
import { ref, reactive, computed } from "vue";
const info = reactive({
  fullName: "Joewari Ben",
  Age: 40,
  favouriteMusicBand: ["Boyz II Men", "Back Street Boyz", "MLTR"],
  favoritePizzaType: ["pizzar margaritta", "cheese"],
  favouriteDrinks: ["Coca-Cola", "Barleys", "Pure heaven"],
  FavoriteBurgerType: [
    "Lamb Burger",
    "Chicken Burger",
    "Specialty Burger",
    "Cheese Burger",
    "Bacon Burger",
  ],
});
</script>
<!-- CSS -->
<!-- The scoped attribute means that only the CSS properties available inside this style tag will be applied inside this component and ONLY This component -->
<style scoped></style>
