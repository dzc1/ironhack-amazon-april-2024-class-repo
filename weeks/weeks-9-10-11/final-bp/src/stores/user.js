// Import reactive from Vue to make the tasks array reactive
import { ref } from "vue";
// Import defineStore from Pinia to define a new store
import { defineStore } from "pinia";
/**
 * This file defines a user store using the Composition API via Pinia.
 * It handles user management such as sign up, sign in, and sign out actions,
 * and uses local storage for persisting user data. This approach is suitable
 * for applications that require client-side user management without backend dependency.
 *
 * Summary:
 * The store initializes reactive state variables for user and profile data. It includes
 * actions to manage these data, leveraging the local storage browser feature to persist user
 * state across sessions. This makes it a good fit for small applications or prototypes needing
 * simple authentication mechanisms.
 */

export const useUserStore = defineStore("user", () => {
  // Reactive state for storing current user data.
  const user = ref(null);
  const profile = ref(null);

  /**
   * Saves a value under a specified key in local storage.
   * This function serializes the value to a string before storing it.
   * @param {String} key - Storage key under which the value is stored.
   * @param {*} value - The value to be stored.
   */
  function saveToLocalStorage(key, value) {
    // localStorage.getItem(); // The method getItem will access the local storage object and it will look up an item with the same key that you provide with it.
    // localStorage.removeItem(); // The method removeItem will access the local storage object and it will remove an item with the same key that you provide with it.
    // localStorage.setItem(); // The method setItem will access the local storage object and it will update an item with the same key that you provide with it.
    // localStorage.clear(); // // The method clear, it  will access the local storage object and it will delete every key/value that it wiill fiind.
    // localStorage.key(); // Returns the name of the nth key, or null if n is greater than or equal to the number of key/value pairs.
    // localStorage.length;
    // ---
    // ---
    // ---
    // Setting both keys and values, we do not have passed specific values yet, because this function is compltely re-usable
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Retrieves and deserializes a value from local storage by key.
   * @param {String} key - The key to retrieve the data from local storage.
   * @returns {*} The parsed value from local storage or null if key doesn't exist.
   */
  function getFromLocalStorage(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  /**
   * Fetches the user and profile data from local storage and updates the reactive states.
   * This function is used to rehydrate the user's state when the application is reloaded.
   */
  function fetchUser() {
    user.value = getFromLocalStorage("user");
    profile.value = getFromLocalStorage("profile");
    console.log("user in store: ", user.value);
    console.log("profile in store: ", profile.value);
  }

  /**
   * Simulates the user registration process. It creates a new user object,
   * saves it to local storage, and updates the reactive user state.
   * @param {String} email - The email of the user to be registered.
   * @param {String} password - The password for the new user.
   */
  function register(email, password) {
    // 1 - variable, this variable is set to an OBJECT, how do we know?. We have key, value pairs. We have a key by the name of 'id', aand a key by the name of email, and one for password.
    // Its important to understand, that inside the newUser var we are passing 3 things which 2 of them are referenced as parameters initially on the register()
    // The key with the name of 'id', it's set to be a little mathematical operation using the Date object.
    // Date.now(), generates a random 12 digit number that it will mimic a real UUID (Unique User ID), in a real life scenario
    const newUser = { id: Date.now(), email, password };
    // 2 - we access a ref variable, rememember that everytime you see the .value, it should be an inidicator of ref().
    // We are just assingning all values from the var newUser into the reactive variable using ref, that way we make it easier to acccess/redit in VUE.js
    user.value = newUser;
    // 3 - We access the function that is initially on the file
    saveToLocalStorage("user", newUser);
    // 4 - variable
    const newProfile = { user_id: newUser.id, username: email };
    // 5 - we access a reactive variable, rememember that everytime you see the .value, it should be an inidicator of ref()
    profile.value = newProfile;
    // 6 - We access the function that is initially on the file
    saveToLocalStorage("profile", newProfile);
    // 7 - We log into the console, to check
    console.log("New user created:", user.value);
  }

  /**
   * Returns the reactive variables and functions for external use in components.
   * This allows for easy access and manipulation of the user's state within the application.
   */
  return { user, profile, fetchUser, register };
});
