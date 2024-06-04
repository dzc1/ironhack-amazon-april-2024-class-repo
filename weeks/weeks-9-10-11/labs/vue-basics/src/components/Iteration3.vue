<template>
  <div id="v-if-v-else">
    <h1 v-if="propertyShow">
      Showing a property due to its boolean value being set to true
    </h1>
    <h1 v-else>
      Showing a property due to its boolean value being set to false
    </h1>
  </div>
  <div id="v-show">
    <h1 v-show="showProperty">
      Showing a property due to its boolean value being set to true or false -
      Using a v-show directive
    </h1>
  </div>
  <div id="v-if-conditional">
    <h1 v-if="showProperty2 === true">
      Showing a property using a v-if conditionally checking for the boolean
      value within the directive
    </h1>
  </div>
</template>

<script setup>
import { ref } from "vue";

const propertyShow = ref(false);
const showProperty = ref(false);
const showProperty2 = ref(true);
</script>

<style></style>
