<!-- HTML -->
<template>
  <div class="comps">
    <div id="explanation">
      <h2>Learning how to use Text Directives in Vue</h2>
      <!-- Use text interpolation -->
      <!-- Mustache Syntax -->
      <h4>Using text interpolation</h4>
      <p>{{ musicBand }}</p>

      <!-- Use v-text directive -->
      <h4>Using v-text directive</h4>
      <p v-text="musicBandTextDirectiveExample"></p>

      <!-- Use v-text directive with a numeric variable -->
      <h4>Using v-text directive - Number</h4>
      <p v-text="myNumber"></p>
    </div>

    <!-- Function Examples using text directives -->
    <div>
      <p>The Name is - Using Text Interpolation ..... - {{ userName }}</p>
      <button @click="askNameUsingInterpolation">
        CLick here to add a name into the DOM
      </button>
    </div>
    <!-- Function - Text Directive -->
    <div>
      <p>
        The Name is - Using Text Directive ..... -
        <span v-text="myNameTextDirective"></span>
      </p>
      <button @click="askNameTextDirective">
        click here to add name into the ddoom - using text Directive
      </button>
    </div>
  </div>
</template>

<!-- JS  -->
<script setup>
import { ref, reactive } from "vue";

// The "v-text" directive in Vue is used to set the text content of an HTML element. It is similar to using double curly brace interpolation "{{ }}" in Vue, but instead of inserting the text inside the element, "v-text" completely replaces the existing content with the new provided text.

// Variables used in examples
let musicBand = ref("The Beatles");
let musicBandTextDirectiveExample = ref("The Doors");
let myNumber = ref(101);
let userName = ref(null); // using a null   value
let myNameTextDirective = ref(""); // usig an empty string instead of a null   value

// Functions
// Function to prompt for name using text interpolation
// Function Decalartion Example
function askNameUsingInterpolation() {
  // Let's use a variable to store the name and use the prompt method to ask the name from the user using the broswer-
  const name = prompt("Hey, tell me your name");
  if (name) {
    // Whenever you want to access a dynamic variable that usess ref() or reactive(), yu have to treat it as an object ad chain to the variable name +  the keyword .value
    // So look at variable on line 43 for example which is calledd userName and then chain to it . value lie we have below.
    userName.value = name;
  }
}

// Function to prompt for name using v-text directive
// Function Expression Example
const askNameTextDirective = () => {
  // Let's use a variable to store the name and use the prompt method to ask the name from the user using the broswer-
  const name = prompt("Hey, tell me your name");
  if (name) {
    // Whenever you want to access a dynamic variable that usess ref() or reactive(), yu have to treat it as an object ad chain to the variable name +  the keyword .value
    // So look at variable on line 44 for example which is calledd userName and then chain to it . value lie we have below.
    myNameTextDirective.value = name;
  }
};
</script>

<!-- CSS -->
<style scoped></style>

<!-- Explanation -->
<!-- What are Text Directives in Vue?
Text directives in Vue, like v-text, are special attributes that Vue uses to bind data to the DOM. They allow you to control the content of HTML elements dynamically based on your application's data.

Why Do We Use Text Directives?

- Dynamic Content: 
    Text directives enable you to insert dynamic content into your HTML elements. This means the content can change based on user input or other data changes in your application.

- Cleaner Code: 
    Using directives like v-text can make your template code cleaner and more readable compared to traditional methods. Instead of embedding complex logic inside your HTML, you can keep your templates simple and declarative.

- Reactivity: 
    Vue's reactivity system automatically updates the DOM whenever the underlying data changes. Text directives are a part of this system, ensuring your UI stays in sync with your data. 
  
  
Drawbacks and Things to Know About Text Directives in Vue
While text directives in Vue are powerful and convenient, there are some considerations and potential drawbacks to be aware of:

- Data Type Handling:
  - Issue: Text directives display data as strings. If you bind a number or an object, Vue converts it to a string.
  - Solution: Be mindful of the data types and ensure you're binding the correct type of data.

- Overwriting Content:

  - Issue: v-text completely replaces the content of the element. If you need to combine static text with dynamic text, v-text is not suitable.
  - Solution: Use text interpolation {{ }} for more complex content structures

- Limited Use Case:

  - Issue: v-text is only for text content. It cannot be used for binding HTML content. ]
  - Solution: For binding HTML content, use the v-html directive, but be cautious of XSS vulnerabilities.  



-->
