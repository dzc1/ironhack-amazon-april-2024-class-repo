<script setup>
import { ref } from "vue";
import json from "./contacts.json";

//Check that the conexion has been done.
//console.log(json);

let contacts = ref([json[0], json[1], json[2], json[3], json[4]]);
//Remember. If you want to access a ref value while you are coding in <script>, you have to add .value at the end of the variable name.
//console.log(contacts.value);

function addRandomContact() {
  contacts.value.push(json[Math.floor(Math.random() * json.length)]);
}

function orderByName() {
  contacts.value.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
}

function orderByPopularity() {
  contacts.value.sort((a, b) => b.popularity - a.popularity);
}

function deleteContact(id) {
  //cheack that the id is the correct one
  //console.log(id);
  contacts.value.forEach((contact, index) => {
    if (contact.id === id) {
      //You can check how the index variable returns the index value
      //console.log(index);
      contacts.value.push(contacts.value.splice(index, 1)[0]);
      contacts.value.pop();
    }
  });
}
</script>

<template>
  <div>
    <h1>Contacts</h1>
    <h2>Iteration 1</h2>
    <table>
      <thead>
        <th>
          <strong>Picture</strong>
        </th>
        <th><strong>Name</strong></th>
        <th><strong>Popularity</strong></th>
      </thead>
      <tbody>
        <tr v-for="contact in contacts">
          <td><img class="normal-size" :src="contact.pictureUrl" alt="" /></td>
          <td>{{ contact.name }}</td>
          <td>{{ contact.popularity }}</td>
        </tr>
      </tbody>
    </table>
    <h2>Iteration 2</h2>
    <table>
      <thead>
        <th>
          <strong>Picture</strong>
        </th>
        <th><strong>Name</strong></th>
        <th><strong>Popularity</strong></th>
        <th><strong>Oscar</strong></th>
        <th><strong>Emmy</strong></th>
      </thead>
      <tbody>
        <tr v-for="contact in contacts">
          <td><img class="normal-size" :src="contact.pictureUrl" alt="" /></td>
          <td>{{ contact.name }}</td>
          <td>{{ contact.popularity }}</td>
          <td v-if="contact.wonOscar">🏆</td>
          <td v-else></td>
          <td v-if="contact.wonEmmy">🏆</td>
          <td v-else></td>
        </tr>
      </tbody>
    </table>
    <h2>Iteration 3</h2>
    <button @click="addRandomContact">Add random contact</button>
    <table>
      <thead>
        <th>
          <strong>Picture</strong>
        </th>
        <th><strong>Name</strong></th>
        <th><strong>Popularity</strong></th>
        <th><strong>Oscar</strong></th>
        <th><strong>Emmy</strong></th>
      </thead>
      <tbody>
        <tr v-for="contact in contacts">
          <td><img class="normal-size" :src="contact.pictureUrl" alt="" /></td>
          <td>{{ contact.name }}</td>
          <td>{{ contact.popularity }}</td>
          <td v-if="contact.wonOscar">🏆</td>
          <td v-else></td>
          <td v-if="contact.wonEmmy">🏆</td>
          <td v-else></td>
        </tr>
      </tbody>
    </table>
    <h2>Iteration 4</h2>
    <button @click="addRandomContact">Add random contact</button>
    <button @click="orderByName">Order By Name</button>
    <button @click="orderByPopularity">Order By Popularity</button>
    <table>
      <thead>
        <th>
          <strong>Picture</strong>
        </th>
        <th><strong>Name</strong></th>
        <th><strong>Popularity</strong></th>
        <th><strong>Oscar</strong></th>
        <th><strong>Emmy</strong></th>
      </thead>
      <tbody>
        <tr v-for="contact in contacts">
          <td><img class="normal-size" :src="contact.pictureUrl" alt="" /></td>
          <td>{{ contact.name }}</td>
          <td>{{ contact.popularity }}</td>
          <td v-if="contact.wonOscar">🏆</td>
          <td v-else></td>
          <td v-if="contact.wonEmmy">🏆</td>
          <td v-else></td>
        </tr>
      </tbody>
    </table>
    <h2>Iteration 5</h2>
    <button @click="addRandomContact">Add random contact</button>
    <button @click="orderByName">Order By Name</button>
    <button @click="orderByPopularity">Order By Popularity</button>
    <table>
      <thead>
        <th>
          <strong>Picture</strong>
        </th>
        <th><strong>Name</strong></th>
        <th><strong>Popularity</strong></th>
        <th><strong>Oscar</strong></th>
        <th><strong>Emmy</strong></th>
        <th><strong>Actions</strong></th>
      </thead>
      <tbody>
        <tr v-for="contact in contacts">
          <td><img class="normal-size" :src="contact.pictureUrl" alt="" /></td>
          <td>{{ contact.name }}</td>
          <td>{{ contact.popularity }}</td>
          <td v-if="contact.wonOscar">🏆</td>
          <td v-else></td>
          <td v-if="contact.wonEmmy">🏆</td>
          <td v-else></td>
          <td><button @click="deleteContact(contact.id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.normal-size {
  width: 100px;
}
</style>
