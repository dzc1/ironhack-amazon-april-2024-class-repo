<script setup>
import NavBar from "./components/NavBar.vue";
import FooterComponent from "./components/FooterComponent.vue";
import Iteration2 from "./components/Iteration2.vue";
import Iteration3 from "./components/Iteration3.vue";
import Iteration4 from "./components/Iteration4.vue";
import Iteration5 from "./components/Iteration5.vue";

// ... use `AsyncComp` like a normal component
</script>

<template>
  <NavBar />
  <Iteration2 />
  <hr />
  <Iteration3 />
  <hr />
  <Iteration4 />
  <hr />
  <Iteration5 />
  <FooterComponent />
</template>

<style scoped>
hr {
  margin: 1rem 0;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
