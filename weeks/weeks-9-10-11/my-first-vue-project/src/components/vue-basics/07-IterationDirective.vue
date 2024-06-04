<!-- HTML -->
<template>
  <div class="comps">
    <h5>Learning how to loop in Vue.js</h5>

    <!-- V-FOR -->

    <!-- Learning how to loop through a dynamic reactive variable containing an array of countries -->
    <!-- When you call an iterator or an inidvidual position of the array using the v-for difective, the inidividual position you name inside the v-for however you want -->
    <!-- We are calling it 'myCoolKeyword' in this example -->
    <!-- https://dev.to/marinamosti/in-vue-when-do-i-actually-need-the-key-attribute-and-why-ga5 -->
    <ul>
      <li v-for="myCoolKeyword in teams" v-bind:key="myCoolKeyword">
        <span>{{ myCoolKeyword }}</span>
      </li>
    </ul>

    <!-- --- -->
    <!-- --- -->
    <!-- --- -->
    <!-- Looping THorugh an Array of Objects - Food types -->
    <div>
      <h5>Mi favorite foods</h5>
      <div
        v-for="(foodObject, index) in foodTypes"
        v-bind:key="foodObject.uniqueId"
      >
        <h5><span>Title</span> {{ foodObject.name }} - {{ index }}</h5>
        <p><span>Country of Origin</span> {{ foodObject.countryOrigin }}</p>
        <p>
          Rating
          <span v-if="foodObject.rating === 1">1 out 5 Stars</span>
          <span v-if="foodObject.rating === 2">2 out 5 Stars</span>
          <span v-if="foodObject.rating === 3">3 out 5 Stars</span>
          <span v-if="foodObject.rating === 4">4 out 5 Stars</span>
          <span v-if="foodObject.rating === 5">5 out 5 Stars</span>
        </p>
      </div>
    </div>
    <!-- --- -->
    <!-- --- -->
    <!-- --- -->
    <!-- Looping THorugh an Array of Objects - Actors -->
    <div class="comps" v-for="(actor, index) in actors" v-bind:key="index">
      <h5>{{ actor.name }}</h5>
      <h6>Movies:</h6>
      <ul>
        <li v-for="movie in actor.movies">{{ movie }}</li>
      </ul>
      <h6>Bio</h6>
      <ul>
        <li>dob: {{ actor.bio.ddob }}</li>
        <li>Age: {{ actor.bio.age }}</li>
        <h6>Residences</h6>
        <ul>
          <li v-for="residence in actor.bio.residencess">{{ residence }}</li>
        </ul>
      </ul>
    </div>
  </div>
</template>

<!-- JS  -->
<script setup>
import { ref, reactive, computed } from "vue";

// Reactive Array dataa variable
const teams = reactive(["Argentina", "Francia", "España", "Japon", "Alemania"]);

// Reactive Object Data Variable
const foodTypes = reactive([
  { name: "Pizza", countryOrigin: "Italia", rating: 3, uniqueId: 1 },
  { name: "Pizza", countryOrigin: "Italia", rating: 3, uniqueId: 2 },
  { name: "Sushi", countryOrigin: "Japan", rating: 5, uniqueId: 3 },
  { name: "Fajitas", countryOrigin: "Mexico", rating: 4, uniqueId: 4 },
  { name: "Paella", countryOrigin: "Spain", rating: 5, uniqueId: 5 },
]);

// Iterating an array of an array within an object
const actors = reactive([
  {
    name: "Robert De Niro",
    movies: ["The Godfather II", "Casino", "Goodfellas"],
    bio: {
      ddob: "December 1990",
      age: 24,
      residencess: ["London", "New york", "Tokyo"],
    },
  },
  {
    name: "Daniel Day Lewis",
    movies: [
      "There will be blood",
      "The Last of the Mohicans",
      "Gangs of New York",
    ],
    bio: {
      ddob: "December 1990",
      age: 24,
      residencess: ["London", "New york", "Tokyo"],
    },
  },
  {
    name: "Merryl Streep",
    movies: ["The Devil wears prada", "Kramer vs Kramer", "Sophies Choice"],
    bio: {
      ddob: "December 1990",
      age: 24,
      residencess: ["London", "New york", "Tokyo"],
    },
  },
]);
</script>
