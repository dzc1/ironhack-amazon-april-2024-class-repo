<!--
This file defines a Vue.js component for displaying completed tasks in a to-do application.
By building this component, we will achieve a user interface that shows a list of tasks marked as completed, leveraging global state management with Pinia.js.
-->

<template>
  <h4>This Page Displays completed tasks</h4>
  <div class="container">
    <ul>
      <!-- Loop through the completedTasks array and render each task -->
      <li v-for="task in completedTasks" v-bind:key="task.id">
        <!-- Display the title of the task -->
        <h5>{{ task.title }}</h5>
        <!-- Display the description title of the task -->
        <h6>{{ task.description.title }}</h6>
        <!-- Display the time to be completed of the task -->
        <h6>{{ task.description.timeToBeCompleted }}</h6>
        <!-- Loop through the extraInfoRequired array and render each item in a list item -->
        <ul>
          <li
            v-for="(extraInfo, index) in task.description.extraInfoRequired"
            v-bind:key="index"
          >
            {{ extraInfo }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
// ------------------------------------------------------------------------
// Import Block
// ------------------------------------------------------------------------

// Import computed from Vue to create a computed property
import { computed } from "vue";
// Import the useTaskStore function from taskStore to interact with the task store
import { useTaskStore } from "../stores/taskStore";

// ------------------------------------------------------------------------
// Store Access Block
// ------------------------------------------------------------------------

// Use the task store by saving it in a variable
const taskstore = useTaskStore();

// Destructure all the possible pieces of data that we want out of this
const { tasks } = taskstore; // Destructure necessary functions and state from the task store

// ------------------------------------------------------------------------
// Computed Properties Block
// ------------------------------------------------------------------------

// Computed property to filter completed tasks
let completedTasks = computed(() => tasks.filter((task) => task.isCompleted));

/*
  The completedTasks computed property filters the tasks array to include only the tasks that are marked as completed.
  - It uses the filter method to iterate over the tasks array.
  - For each task, it checks if the isCompleted property is true.
  - The resulting array contains only the tasks that are completed.
  */
</script>
