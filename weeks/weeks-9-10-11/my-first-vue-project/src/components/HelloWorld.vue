<!-- JS -->
<script setup>
import { ref, reactive } from "vue";

// This method is the method that we use in VUE.js to define props.
// Important, this method is autoIMPORTED, meaning you never have to import it from the vue librari like we are doing with ref or reactive
defineProps({
  // Contains the key of message aand the value is set to a string
  // key name = msg
  // Value of key = String data type
  msg: String,

  // RULE: AAlways define your data types sarting with the 1st letter in Captial case
  // Let's create props so we canuse all data types
  // String Prop
  name: String,
  // Number Prop
  age: Number,
  // Boolean Prop
  isTrue: Boolean,
  // Array prop
  arrayPropHolder: Array,
  // Object Prop
  objectPropHolder: Object,
});

const count = ref(0);
</script>
<!-- HTML -->
<template>
  <div class="border-props">
    <h4>{{ msg }}</h4>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>{{ isTrue }}</p>
    <p>{{ arrayPropHolder }}</p>
    <p>{{ objectPropHolder }}</p>

    <div>
      <button type="button" @click="count++">count is {{ count }}</button>
    </div>
  </div>
</template>

<!-- CSS -->
<style scoped>
.read-the-docs {
  color: #888;
}

.border-props {
  border: 1px solid red;
  margin: 1rem 0;
}

button {
  margin: 0 0 0.5rem 0;
}
</style>
