<template>
  <div v-for="(post, index) in posts" :key="index">
    <ul>
      <li>
        <h3>{{ index }} - {{ post.title }}</h3>
        <h5>{{ post.description }}</h5>
        <p>{{ post.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const posts = ref([
  {
    title: "Are patatas bravas the best fries that you can have? ",
    description:
      "A conversation with Ferran Adria, BArcelona's top chef about bravas",
    content: "I really like bravas",
  },
  {
    title:
      "Is the rise of extremesim within politics a norm within our modern world?",
    description: "Trump, Bolsonaro, Chavez, Lula....",
    content: "Yo presidents be tripping yo!",
  },
  {
    title: "Pizza or Pasta? ",
    description: "A conversation with MArc about the best italian food",
    content: "Marc can eat like a pig and not get fat! great for you Marc",
  },
]);
</script>

<style>
li {
  margin: 2rem 0;
  list-style: none;
}
</style>
