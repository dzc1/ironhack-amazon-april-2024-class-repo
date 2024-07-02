<!--
This file defines a Vue.js component for displaying and managing tasks in a to-do application.
By building this component, we will achieve a user interface that shows a list of all tasks,
allowing users to mark tasks as completed and delete them, leveraging global state management with Pinia.js.
-->

<template>
  <h4>This Page Displays all tasks</h4>

  <div class="container">
    <!-- Loop through the tasks array and render each task in a list item -->
    <ul>
      <!-- v-for directive to iterate over each task in tasks array -->
      <li v-for="task in tasks" v-bind:key="task.id">
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
        <!-- Display whether the task is completed or incomplete -->
        <h6>{{ task.isCompleted ? "Completed" : "Incomplete" }}</h6>
        <!-- Button to mark the task as completed -->
        <button
          v-bind:disabled="task.isCompleted ? true : false"
          @click="markTaskCompleted(task.id)"
        >
          Mark as Completed
        </button>
        <!-- Button to delete the task -->
        <button @click="deleteTask(task.id)">Delete Task</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
// ------------------------------------------------------------------------
// Import Block
// ------------------------------------------------------------------------

// Import the useTaskStore function from taskStore to interact with the task store
import { useTaskStore } from "../stores/taskStore";

// ------------------------------------------------------------------------
// Store Access Block
// ------------------------------------------------------------------------

// Use the task store by saving it in a variable
const taskstore = useTaskStore();

// Destructure all the possible pieces of data that we want out of this
const { tasks, deleteTask, markTaskCompleted } = taskstore; // Destructure necessary functions and state from the task store

/*
  The useTaskStore function is used to access the task store.
  - Destructure tasks, markTaskCompleted, and deleteTask from the task store.
  - These will be used to interact with the global state of tasks.
  */
</script>

<style scoped>
button {
  display: block;
  margin-bottom: 0.5rem;
}
</style>

<!--
Summary:
This file implements a Vue.js component that displays a list of tasks from the global state managed by Pinia.js.
It allows users to mark tasks as completed or delete them. The component leverages Pinia's state management to
interact with the tasks and provide necessary functionalities.
-->
