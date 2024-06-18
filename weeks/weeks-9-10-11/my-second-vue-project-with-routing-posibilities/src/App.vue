<!-- JS PART OF FILE -->
<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
</script>
<!-- HTML PART OF FILE -->
<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Learning how to use the vue router library in vueJS" />
      <nav>
        <!-- this routerLink is the same as an anchor link or an aTag in html -->
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/like-a-rolling-stone"
          >Like a Rolling Stone - Static</RouterLink
        >
        <RouterLink to="/bio">Bio</RouterLink>
        <RouterLink to="/songList">Rolling Stones 500 Best Songs</RouterLink>
        <!-- Anchor link in VUE.js forces a reload on the browser, and althoug we are not seeing its full capacity yet, this is extremely important because using the routerLink component decreases computingPower incoming from the broswer so its great -->
        <a href="/about">About page using a tag</a>
      </nav>
    </div>
  </header>
  <!-- This is the entryPoint for all files that will act as pages -->
  <RouterView />
</template>
