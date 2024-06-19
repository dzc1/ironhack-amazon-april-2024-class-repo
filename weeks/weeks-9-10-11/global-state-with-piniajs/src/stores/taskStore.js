// This file sets up a global state management system for a to-do application using Pinia.js.
// By building this file, we will achieve a centralized store to manage the state of tasks across our Vue.js application,
// allowing us to add, complete, and delete tasks with ease.

// 1st Block
// Import Block of the Pini.js file
// Import reactive from Vue to make the tasks array reactive
import { reactive } from "vue";
// Import defineStore from Pinia to define a new store
import { defineStore } from "pinia";

// 2nd Block
// Creation of the exported variable to be consumied globally
// Define a new store named 'useTaskStore' using Pinia
// Pass 2 args inisde defineStore method
export const useTaskStore = defineStore("taskStore", () => {
  /// INSIDE THE BODY OF THIS ANONNYMOUS ARROW FUNCTION ABOVE THE RETURN STATEMENT WE DECLARE OUR VARIABLES, FUNCTIONS....

  // Initial array of tasks using reactive to keep the state reactive
  const tasks = reactive([
    {
      id: 1, // Unique identifier for the task
      title: "Buy ingredients to make Tacos", // Title of the task
      description: {
        title:
          "Go to the latin shop next to my use to g buy groceries for this friday's dinner with friends", // Detailed description of the task
        timeToBeCompleted: "2 hours", // Estimated time to complete the task
        extraInfoRequired: ["Guacamole", "Nachos"], // Additional information required for the task
      },
      isCompleted: true, // Boolean indicating if the task is completed
    },
    {
      id: 2, // Unique identifier for the task
      title: "Clean out House", // Title of the task
      description: {
        title: "Clean House by friday for friends dinner", // Detailed description of the task
        timeToBeCompleted: "1 hour", // Estimated time to complete the task
        extraInfoRequired: ["swap", "mop", "dust"], // Additional information required for the task
      },
      isCompleted: false, // Boolean indicating if the task is completed
    },
  ]);
  // ----
  // ----
  // ----

  // Function to add a new task into the tasls reactive variable
  function addTask(task) {
    tasks.push(task); // Push the new task to the tasks array
  }
  /*
  The addTask function is used to add a new task to the tasks array.
  - It takes a task object as a parameter.
  - It uses the push method to add this task object to the end of the tasks array.
  - Since tasks is a reactive array, any components that are using this store will automatically reflect this new task.
  */
  // ----
  // ----
  // ----

  // Function to mark a task as completed
  function markTaskCompleted(taskId) {
    // find the task by it's ID
    // find() - JS
    let task = tasks.find((task) => task.id === taskId);
    // use a little conditional to pass the task from false to true
    if (task) {
      task.isCompleted = true; // Set the task's isCompleted property key of the specific task to TRUE
    }
  }

  /*
  The markTaskCompleted function is used to mark a specific task as completed.
  - It takes a taskId as a parameter.
  - It finds the task in the tasks array that has the same id as the taskId.
  - If a task with the specified id is found, it sets the isCompleted property of that task to true.
  - This function allows for changing the state of a task to reflect its completion status.
  */

  // ----
  // ----
  // ----

  // Function to delete a task
  function deleteTask(taskId) {
    // Find the index of the task to be deleted by its ID
    let index = tasks.findIndex((task) => task.id === taskId);
    if (index !== 1) {
      tasks.splice(index, 1); // Remove the task from the array
    }
  }

  /*
  The deleteTask function is used to remove a specific task from the tasks array.
  - It takes a taskId as a parameter.
  - It finds the index of the task in the tasks array that has the same id as the taskId paremeter.
  - If a task with the specified id is found (index is not -1), it removes the task from the array using the splice method.
  - This function allows for deleting tasks by their unique identifier.
  */

  // ----
  // ----
  // ----

  // Return statement to export all pieces of data or functions globally
  return { tasks, addTask, markTaskCompleted, deleteTask };
});

/*
Summary:
This file defines a Pinia store for managing tasks in a to-do application. It includes an initial set of tasks and provides 
functions to add, mark as completed, and delete tasks. The state management is reactive, ensuring that any changes 
to the tasks are automatically reflected in the Vue.js components that use this store.
*/
