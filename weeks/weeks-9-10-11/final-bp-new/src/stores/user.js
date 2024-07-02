// This file sets up a global state management system for user authentication and profile management using Pinia.js.
// It defines a centralized store to manage the state of user-related data across our Vue.js application,
// allowing us to register, sign in, sign out, and retrieve tasks associated with the logged-in user.

// ------------------------------------------------------------------------
// Import Block
// ------------------------------------------------------------------------

// Import ref from Vue to create reactive references
import { ref } from "vue";
// Import defineStore from Pinia to define a new store
import { defineStore } from "pinia";
// Import useTaskStore to access tasks related to the user
import { useTaskStore } from "./taskStore";

// ------------------------------------------------------------------------
// Store Definition Block
// ------------------------------------------------------------------------

// Define a new store named 'useUserStore' using Pinia
export const useUserStore = defineStore("user", () => {
  // Reactive reference to store user information
  const user = ref(null);
  // Reactive reference to store user profile information
  const profile = ref(null);
  // Reactive reference to track if the user is logged in
  const isLoggedIn = ref(false);

  // ----------------------------------------------------------------------
  // Function to save data to local storage
  // ----------------------------------------------------------------------

  /**
   * Saves a key-value pair to local storage.
   * @param {string} key - The key under which the value will be stored.
   * @param {any} value - The value to be stored.
   */
  function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /*
  The saveToLocalStorage function is used to save data to the browser's local storage.
  - It takes a key and a value as parameters.
  - It converts the value to a JSON string and stores it under the specified key.
  */

  // ----------------------------------------------------------------------
  // Function to get data from local storage
  // ----------------------------------------------------------------------

  /**
   * Retrieves a value from local storage by key.
   * @param {string} key - The key of the value to retrieve.
   * @returns {any} - The parsed value from local storage or null if not found.
   */
  function getFromLocalStorage(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  /*
  The getFromLocalStorage function is used to retrieve data from the browser's local storage.
  - It takes a key as a parameter.
  - It retrieves the value stored under the specified key and parses it from JSON.
  - It returns the parsed value or null if the key does not exist.
  */

  // ----------------------------------------------------------------------
  // Function to fetch user data from local storage
  // ----------------------------------------------------------------------

  /**
   * Fetches user and profile data from local storage and updates the state.
   */
  function fetchUser() {
    user.value = getFromLocalStorage("user");
    profile.value = getFromLocalStorage("profile");
    if (user.value) {
      isLoggedIn.value = true;
    }
  }

  /*
  The fetchUser function is used to load user and profile data from local storage.
  - It updates the user and profile reactive references with the stored values.
  - It sets isLoggedIn to true if user data is found.
  */

  // ----------------------------------------------------------------------
  // Function to register a new user
  // ----------------------------------------------------------------------

  /**
   * Registers a new user and saves the user and profile data to local storage.
   * @param {string} email - The email of the new user.
   * @param {string} password - The password of the new user.
   */
  function register(email, password) {
    const newUser = { id: Date.now(), email, password };
    user.value = newUser;
    saveToLocalStorage("user", newUser);
    const newProfile = { user_id: newUser.id, username: email };
    profile.value = newProfile;
    saveToLocalStorage("profile", newProfile);
  }

  /*
  The register function is used to create a new user.
  - It takes an email and a password as parameters.
  - It creates a new user object with a unique ID, email, and password.
  - It updates the user and profile reactive references with the new data and saves them to local storage.
  */

  // ----------------------------------------------------------------------
  // Function to sign in a user
  // ----------------------------------------------------------------------

  /**
   * Signs in a user by validating their credentials and updating the state.
   * @param {string} email - The email of the user.
   * @param {string} password - The password of the user.
   * @throws Will throw an error if the user is not found or the password is incorrect.
   */
  function signIn(email, password) {
    let storedUser = getFromLocalStorage("user");
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      user.value = storedUser;
      profile.value = getFromLocalStorage("profile");
      isLoggedIn.value = true;
    } else {
      throw new Error("User not found or password incorrect");
    }
  }

  /*
  The signIn function is used to log in an existing user.
  - It takes an email and a password as parameters.
  - It retrieves the stored user data from local storage and validates the credentials.
  - If the credentials are valid, it updates the user and profile reactive references and sets isLoggedIn to true.
  - If the credentials are invalid, it throws an error.
  */

  // ----------------------------------------------------------------------
  // Function to sign out a user
  // ----------------------------------------------------------------------

  /**
   * Signs out the current user and clears the user and profile data from state and local storage.
   */
  let signOut = () => {
    user.value = null;
    profile.value = null;
    isLoggedIn.value = false;
    localStorage.removeItem("user");
    localStorage.removeItem("profile");
  };

  /*
  The signOut function is used to log out the current user.
  - It clears the user and profile reactive references and sets isLoggedIn to false.
  - It removes the user and profile data from local storage.
  */

  // ----------------------------------------------------------------------
  // Function to get tasks for the current user
  // ----------------------------------------------------------------------

  /**
   * Retrieves tasks for the current user by their user ID.
   * @returns {Array} - An array of tasks that belong to the current user.
   */
  function getTasksForUser() {
    const taskStore = useTaskStore();
    return taskStore.getTasksByUserId(user.value.id);
  }

  /*
  The getTasksForUser function retrieves tasks associated with the currently logged-in user.
  - It accesses the task store and filters tasks by the current user's ID.
  - It returns an array of tasks that belong to the user.
  */

  // ----------------------------------------------------------------------
  // Return statement to export all pieces of data or functions globally
  // ----------------------------------------------------------------------
  return {
    user,
    profile,
    isLoggedIn,
    fetchUser,
    register,
    signIn,
    signOut,
    getTasksForUser,
  };
});

/*
Summary:
This file defines a Pinia store for managing user authentication and profile information in a Vue.js application.
It includes functions to register, sign in, sign out, and fetch user-specific tasks from the task store. The state 
management is reactive, ensuring that any changes to the user data are automatically reflected in the Vue.js components 
that use this store.
*/
