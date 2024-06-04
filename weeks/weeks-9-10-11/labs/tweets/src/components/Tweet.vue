<template>
  <div class="tweet">
    <ProfileImage
      :image="imageFather"
      :imageAlt="`${userFather.name} - profile image`"
    />
    <!-- Bypassing the use of a component to extract logic and inyecting the object user.image through the prop userFather -->

    <!-- <img :src="userFather.image" class="profile" :alt="imageAlt" /> -->

    <div class="body">
      <!-- Iteration 1 - preRefactoring -->
      <!-- <div class="top">
        <User :user="userFather" />
        <Timestamp :timestamp="timestampFather" />
      </div> -->

      <!-- Iteration 2 - postRefactoring -->
      <div class="top">
        <User :user="userFather" :timestamp="timestampFather" />
      </div>
      <Message v-bind:message="messageFather" />
      <Actions />
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<script setup>
import Actions from "./Actions.vue";
import Message from "./Message.vue";
import Timestamp from "./Timestamp.vue";
import User from "./User.vue";
import ProfileImage from "./ProfileImage.vue";

defineProps({
  messageFather: {
    type: String,
  },
  timestampFather: {
    type: String,
  },
  userFather: {
    type: Object,
  },
  imageFather: {
    type: String,
  },
  imageAltFather: {
    type: String,
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
