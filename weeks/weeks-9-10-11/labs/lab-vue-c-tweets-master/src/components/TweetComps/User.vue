<!-- HTML -->
<template>
  <div class="top">
    <span class="user">
      <span class="name">{{ user.name }} </span>
      <span class="handle">@{{ user.handle }}</span>
    </span>

    <Time v-bind:timeStamp="timeStamp" />
  </div>
</template>

<!-- JS  -->
<script setup>
import Time from "./TimeStamp.vue";

defineProps({
  user: Object,
  timeStamp: String,
});
</script>

<!-- 3 Step Approach
1. call the defineProps() method and start declaring your props
2. Assign ddataTypes to props always starting with Capital letter. 
3. Use your Props within your template -->
