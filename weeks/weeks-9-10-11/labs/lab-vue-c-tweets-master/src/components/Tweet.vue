<script setup>
import Actions from "./TweetComps/Actions.vue";
import Message from "./TweetComps/BodyMessage.vue";
import User from "./TweetComps/User.vue";
import ProfileImage from "./TweetComps/ProfileImage.vue";

defineProps({
  tweet: Object,
});
</script>

<template>
  <!-- This is a static Tweet -->
  <!-- <div class="tweet">
    <img src="https://i.imgur.com/9yw1Fyw.jpg" class="profile" alt="profile" />

    <div class="body">
      <div class="top">
        <span class="user">
          <span class="name">Ironhack</span>
          <span class="handle">@ironhack</span>
        </span>

        <span class="timestamp">Nov 30, 2020</span>
      </div>

      <p class="message">
        On December 7th, we will be hosting a #webinar that will introduce you
        to #SQL! Are you ready? 🚀
      </p>

      <div class="actions">
        <i class="far fa-comment"></i>
        <i class="fas fa-retweet"></i>
        <i class="far fa-heart"></i>
        <i class="fas fa-share"></i>
        <i class="fa-solid fa-house"></i>
      </div>
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div> -->
  <!-- This a dynamic Tweet, that recieves info from the parent (App.vue) -->
  <div class="tweet">
    <!-- Using the long way
    Binding to the src attribute
    we are using the short version of binding within line 44
    -->
    <!-- <img v-bind:src="tweet.user.image" class="profile" alt="profile" /> -->
    <!-- -- -->
    <!-- -- -->
    <!-- Using the short way
    Binding to the src attribute -->
    <!-- <img :src="tweet.user.image" class="profile" alt="profile" /> -->
    <!-- Add ProfileImage Comp here -->
    <ProfileImage v-bind:image="tweet.user.image" />

    <div class="body">
      <!-- Add user Comp here -->
      <User v-bind:user="tweet.user" v-bind:timeStamp="tweet.timestamp" />

      <!-- Add bodymessage comp here -->
      <Message v-bind:message="tweet.message" />

      <!-- Add Actions Comp here -->
      <Actions />
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
