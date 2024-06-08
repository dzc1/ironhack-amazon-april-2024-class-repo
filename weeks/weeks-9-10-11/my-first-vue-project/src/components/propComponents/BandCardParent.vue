<!-- HTML -->
<!-- This component is inyected in the App.vue component. 
So, App.vue is parent of BandCardParent -->
<template>
  <div id="card">
    <BandInfo :bandNameChild="bandName" :bandGenreChild="bandGenre" />
    <BandSong
      :bandSongChild="bandSong"
      :songInformationChild="songInformation"
    />
    <BandImg :bandImgChild="bandImg" :bandNameChild="bandName" />
  </div>
</template>

<!-- JS  -->
<script setup>
import { ref, reactive, computed } from "vue";
import BandInfo from "./childComps/BandInfo.vue";
import BandSong from "./childComps/BandSong.vue";
import BandImg from "./childComps/BandImage.vue";

// Lets define some props
defineProps({
  bandName: String,
  bandGenre: String,
  bandSong: String,
  songInformation: String,
  bandImg: String,
});
</script>

<!-- CSS -->
<style scoped>
#card {
  border: 1px solid blue;
  margin: 2rem;
  padding: 1rem 0.5rem;
}
</style>
