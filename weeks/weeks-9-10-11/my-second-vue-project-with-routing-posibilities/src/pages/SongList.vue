<!-- HTML -->
<template>
  <h1>Top 500 Songs</h1>
  <div v-if="songs">
    <ul>
      <RouterLink
        v-for="(song, index) in songs"
        :key="index"
        v-bind:to="`/songList/${song.title.replace(/\s+/g, '-').toLowerCase()}`"
      >
        <li>{{ index }} - {{ song.title }}</li>
      </RouterLink>
      <!-- IN HERE IT WILL PASS TO THE SPECIFC PAGE with SONG INFO -->
    </ul>
  </div>

  <div v-else>
    <Spinner text="Loading Songs..." />
  </div>
</template>

<!-- JS -->
<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Spinner from "../components/Spinner.vue";

// 1. Use a reactive variable to have the possibility to pass info from the data that we will receive
// 2. Generate a function, that will 'fetch' the json file internally
// 3. We will call that function using a lifeCycle method!

// Declare ref to store songs data
// Initially as null because 1 is empty and 2 we will store the data from the json file inside here
let songs = ref(null);

// Async function to fetch songs data from local JSON file
const fetchSongs = async () => {
  // Try catcch block
  try {
    // Fetch using await in order to call for the resource (JSON file)
    // remember that we are using the public folder to store the data, thus accesss of it is a bit different, take a look on the fetch method :)
    let response = await fetch("/data/songs.json");
    // Parse the inoformation from json to a readabale format using the json()
    let data = await response.json();
    console.log(data);
    // Clean up the access to the data by using a bit of dotNotation in Objects to go one level deeper
    let cleanData = data.songs;
    console.log(cleanData);

    // Assing the information from cleanData to the 'songs' reactive variable on line 16
    songs.value = cleanData;
  } catch (error) {
    console.error("failed to fetch songs on the fetch request", error);
  }
};

// THIS MIMICS A 500 milli-SECOND DELAY ON CALLINNG THE FUNCTION
setTimeout(() => {
  fetchSongs();
}, 500);
</script>

<!-- IN REFERENCE TO REGEX INSIDE THE TEMPLATWE TAG READ THIS FOR CONTEXT -->

<!-- 
  
  :to="/songList/${song.title.replace(/\s+/g, '-').toLowerCase()}":

The :to attribute defines the destination route.
It dynamically creates a URL path based on the song.title.

  -->

<!-- 
  
  In Terms of the Regex Expression:
    - song.title.replace(/\s+/g, '-').toLowerCase():
    - song.title: Gets the title of the song.
        - .replace(/\s+/g, '-'):
        - This part replaces all spaces in the song title with dashes (-).
        - \s+: Matches one or more whitespace characters (spaces, tabs, etc.).
        - g: Stands for global, meaning it replaces all occurrences of whitespace in the string.
    - .toLowerCase():
        - Converts the entire title to lowercase.
  -->
