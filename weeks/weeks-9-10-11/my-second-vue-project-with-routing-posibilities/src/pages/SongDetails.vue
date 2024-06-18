<template>
  <div>
    <h2>
      Song Title: <span>{{ songDetails.title }}</span>
    </h2>
    <p>
      Artist name: <span>{{ songDetails.artist }}</span>
    </p>
    <p>
      Album name: <span>{{ songDetails.album }}</span>
    </p>
    <p>
      Year:
      <span> {{ songDetails.year }}</span>
    </p>
    <p>
      Rank: <span>{{ songDetails.rank }}</span>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
// 1st. We will use a reactive null value to then pass information from the song details
// (IMPORTANT) - WE ARE NOT GOING TO PASS THE INFORMATION AS PROPS, BECAUSE IF YOU LOOK AT SONGLIST.VUE WE NENVER IMPORT THIS FILE, WE ARE REFERENCING ADYNAMIC ROUTE THAT THEN IF YOU LOOK AT THE ROUTER/INDEX.JS FILE, YOU WILL SEE IN SIDE THE ROUTE KEY THE DYNAMIC STRUCTURE WITH THE 2 DOTS ":"
// 2nd. Given that the url that we have built comes with the title of the song inside of it, we wil use this to our benefit, so BASICALLY WE HAVE TO "READ" THE CONTENTS OF THE URL,
// This is doable using a method from the router library called useRoute()
// The useRoute() - allows you to read information from the URL of the app
// 3rd. We will generate a function that will fetch the songs.json and then we will find the song inside the 500OBJECTS that matches the songTitle that we receive from the URL,m once we have that match, we will sore the information about the song inside that reactive variable and then display the info within the template.

// EXTRAS
// LEts use the spinner compoonent to our advantage

// 1. Reactive Variable
let songDetails = ref(null);

// 2. In order to use the useRoute method imported on line 8. it is best if you store inside a variable, that way is easyly accessed inside the script.
// KEEP IN MIND, since ITS A METHOD REMEMBER TO PASS THE () PARENTHESIS
const route = useRoute();
console.log(route);
console.log(route.params);
console.log(route.params.songTitle);

// 3. Generate function to find the same song inside the json file and match it to the songTitle that we are getting from the params of the route of the url.
const fetchSongDetails = async () => {
  try {
    // Lets store the info from the route param 'songTitle' inside a variable
    let songTitleFromParams = route.params.songTitle;
    // Lets fetch
    let response = await fetch("/data/songs.json");
    // Let clean up the info from json and pass it to readable objects using .json()
    let data = await response.json();
    console.log(data);
    // Lets have an easier access to the data by chaininig to the songs key
    let cleanData = data.songs;
    // We have to use the find() to find within  the json file the same song that we are storing inside line 34 the variable songTitle
    songDetails.value = cleanData.find(
      (song) =>
        song.title.replace(/\s+/g, "-").toLowerCase() === songTitleFromParams
    );
    console.log(songDetails.value);
  } catch (error) {
    console.error("Failed to fetch song from json", error);
  }
};

fetchSongDetails();
</script>

<style scoped>
span {
  font-weight: bold;
  display: block;
}
</style>
