<!-- This File is the top-level file of your app -->
<!-- A good convention is to always use the naming-convention called PascalCase convention -->

<!-- The 3 TAGS
Any Vue file contains these 3 tags! -->

<!-- Script Tag is where we write our javascript, also thiss tag iss where we will be importing other tags, other files -->

<!-- The Template Tag - this tag serves to innyect/use/apply any html elements that you already know -->

<!-- The Style Tag - is the tag that we use to pass any CSS to the file! -->

<!-- This is where you inyect Javscript -->
<script setup>
import { ref, reactive } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import FirstComp from "./components/vue-basics/01-FirstComp.vue";
import FirstReactiveComp from "./components/vue-basics/02-FirstReactiveComp.vue";
import TextDirectives from "./components/vue-basics/04-TextDirectives.vue";
import HtmlDirectives from "./components/vue-basics/05-HtmlDirective.vue";
import ConditionalDirective from "./components/vue-basics/06-ConditionalDirective.vue";
import IterationDirective from "./components/vue-basics/07-IterationDirective.vue";
import BindDirective from "./components/vue-basics/08-BindDirective.vue";
import FormDirective from "./components/vue-basics/09-FormDirective.vue";

// Ex's
import VForEx from "./components/exercises/02-Vfor.vue";

// Prop Components
import BandCard from "./components/propComponents/BandCardParent.vue";

// Lets store the data outside the component prop and jsut fetch from here
let infoOne = reactive({
  msg: "Hello Class",
  name: "Diegoooo",
  age: 10,
  isTrue: false,
  arrayHolder: ["diego", 12, false],
  objectholder: {
    name: "Ronaldo",
    country: "Brazil",
  },
});

const bands = reactive([
  {
    id: 0,
    bandInfo: {
      name: "The Doors",
      image:
        "https://ballesterockmusicdotcom.files.wordpress.com/2016/04/the-doors-logo.jpeg?w=640",
      genre: "Rock n Roll",
    },
    popularSong: "L.A Woman",
    popularSongInfo:
      "L.A. Woman is the sixth studio album by the American rock band the Doors, released on April 19, 1971, by Elektra Records. It is the last to feature lead singer Jim Morrison during his lifetime due to his death three months after the album's release, though he would posthumously appear on the 1978 album An American Prayer. Even more so than its predecessors, the album is heavily influenced by blues. It was recorded without record producer Paul A. Rothchild after he fell out with the group over the perceived lack of quality of their studio performances. Subsequently, the band co-produced the album with longtime sound engineer Bruce Botnick.",
  },
  {
    id: 1,
    bandInfo: {
      name: "Led Zeppelin",
      image:
        "https://ballesterockmusicdotcom.files.wordpress.com/2016/04/the-doors-logo.jpeg?w=640",
      genre: "Rock n Roll",
    },
    popularSong: "Whole Lotta love",
    popularSongInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ipsa, consequuntur provident blanditiis facere, aliquid, est nemo repellendus et laudantium tempora iste. Aperiam, ab quasi fugiat dignissimos incidunt quae maxime!",
  },
]);
</script>

<!-- This is where you write your HTML -->
<template>
  <div>
    <h1>Leaarning Vue.js</h1>
  </div>

  <!-- Props Component here -->
  <!-- RuleSet -->
  <!-- ***ALL DATA TYPES - EXCEPT STRING TYPES HAVE TO BE BINDED*** -->

  <!-- <HelloWorld
    msg="Hello class"
    name="diego"
    v-bind:age="4"
    :isTrue="true"
    :arrayPropHolder="[1, 10, 20, 11]"
    :objectPropHolder="{
      name: 'Ronaldinho',
      country: 'Brazil',
    }"
  />
  <HelloWorld
    :msg="infoOne.msg"
    :name="infoOne.name"
    v-bind:age="infoOne.age"
    :isTrue="infoOne.isTrue"
    :arrayPropHolder="infoOne.arrayHolder"
    :objectPropHolder="infoOne.objectPropHolder"
  /> -->

  <!-- Band Card Example here -->
  <!-- Rememeber we will be fertching the data from the 'bands' variable and display info innside the component. -->

  <!-- THiS USE CASE SuCKS CAUSE WE ARE REPEATING EACH CCOMPONENT AND TARGETING BY THE ARRAY POSOTION, BELOW WE LOOP THROUGH IT USING V-FOR ;) -->
  <!-- <BandCard
    :bandName="bands[0].bandInfo.name"
    :bandGenre="bands[0].bandInfo.genre"
    :bandSong="bands[0].popularSong"
    :songInformation="bands[0].popularSongInfo"
    :bandImg="bands[0].bandInfo.image"
  />

  <BandCard
    :bandName="bands[1].bandInfo.name"
    :bandGenre="bands[1].bandInfo.genre"
    :bandSong="bands[1].popularSong"
    :songInformation="bands[1].popularSongInfo"
    :bandImg="bands[1].bandInfo.image"
  /> -->

  <BandCard
    v-for="band in bands"
    :key="band.id"
    :bandName="band.bandInfo.name"
    :bandGenre="band.bandInfo.genre"
    :bandSong="band.popularSong"
    :songInformation="band.popularSongInfo"
    :bandImg="band.bandInfo.image"
  />

  <!-- Coomps Here -->
  <div class="border">
    <!-- <FirstReactiveComp /> -->

    <!-- Text Directive Comp  -->
    <!-- <TextDirectives /> -->

    <!-- Html Directive Comp  -->
    <!-- <HtmlDirectives /> -->

    <!-- Conditional Directive Comp  -->
    <!-- <ConditionalDirective /> -->

    <!-- Iteration Directive Comp  -->
    <!-- <IterationDirective /> -->

    <!-- Binding Directive Comp  -->
    <!-- <BindDirective /> -->

    <!-- Form Directive Comp -->
    <!-- <FormDirective /> -->
  </div>

  <div id="excercises">
    <!-- <VForEx /> -->
  </div>

  <!-- Uncomment Here to see in order -->
  <!-- 1 -->
  <!-- <FirstComp /> -->
  <!-- 2 -->

  <!-- This is how a Vue component is applied inside the template(html) tag -->
  <!-- By nature, they are self-closing -->
  <!-- Let's uncomment when we get to props -->
  <!-- <HelloWorld msg="Hello Students" /> -->
</template>

<!-- This is where you write CSS Specific to this file -->
<!-- The 'scoped' attribute when placed inside the opening style tag of any .vue file means that style will be applied **only** to the elements inside the same file -->
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
