<!-- HTML -->
<template>
  <!-- Initial Example -->
  <!-- <label for="message">Message:</label> -->
  <!-- This id 2-way data binding -->
  <!-- <input type="text" name="message" id="message" v-model="message" /> -->

  <!-- This id 1-way data binding -->
  <!-- <input
    type="text"
    name="message"
    id="message"
    value="some random message..."
  /> -->

  <!-- --- -->
  <!-- --- -->
  <!-- --- -->
  <!-- --- -->
  <!-- Form Display of keyvalues inside formValues variable
  THIS IS FOR DISPLAY PURPOSES -->
  <!-- <pre>{{ formValues }}</pre> -->

  <!-- Form Event Type to submit form: @submit
  If you add this event-type in the form element tag you are able to send all the info inside the form. -->
  <h4>Job Aapplication Form</h4>

  <form
    v-if="!formValues.isSubmitted"
    @submit.prevent="submitFormDisplayInHtml"
  >
    <!-- Name -->
    <label for="applicant-name">
      Enter your Name:
      <input
        type="text"
        name="applicant-name"
        id="applicant-name"
        v-model="formValues.formName"
      />
    </label>
    <!-- Age -->
    <label for="applicant-age">
      Enter your Age (min 18 years):
      <input
        v-model="formValues.age"
        type="number"
        name="applicant-age"
        id="applicant-age"
    /></label>
    <!-- Work Summary -->
    <label for="applicant-summary">
      Enter a brief summary of your last projects:
      <textarea
        v-model="formValues.workSummary"
        name="applicant-summary"
        id="applicant-summary"
        cols="30"
        rows="10"
      ></textarea>
    </label>
    <!-- Country of Birth 
    Remember that we are targetting central-american developers -->
    <div>
      <label for="central-american-country-origin">
        Country of Birth:
        <select
          v-model="formValues.country"
          name="central-american-country-origin"
          id="central-american-country-origin"
        >
          <option selected disabled>Choose a country:</option>
          <option value="mexico">Mexico</option>
          <option value="guatemala">Guatemala</option>
          <option value="el-salvador">El Salvador</option>
        </select>
      </label>
    </div>
    <!-- job Relocation -->
    <div>
      <p>
        This job requires you to move to the Caribean. We have locations in the
        following countries. Please select 1 or more location of choice for your
        relocation. The company offers full comopensation on housing-relocation.
      </p>
      <label>
        Jamaica
        <input
          v-model="formValues.jobRelocation"
          value="jamaica"
          type="checkbox"
        />
      </label>
      <label>
        Aruba
        <input
          v-model="formValues.jobRelocation"
          value="aruba"
          type="checkbox"
        />
      </label>
      <label>
        The Bahamas
        <input
          v-model="formValues.jobRelocation"
          value="the-bahamas"
          type="checkbox"
        />
      </label>
    </div>
    <!-- Years of experience 
    Radio Button -->
    <div>
      <p>Tell us your experience:</p>

      <!-- Begginer -->
      <label>
        0-3 Years
        <input
          name="experience"
          v-model="formValues.experience"
          type="radio"
          value="0-3"
      /></label>
      <!-- Intermidiatte -->
      <label>
        3-5 Years
        <input
          name="experience"
          v-model="formValues.experience"
          type="radio"
          value="3-5"
      /></label>
      <!-- Senior -->
      <label>
        5 and above
        <input
          name="experience"
          v-model="formValues.experience"
          type="radio"
          value="5+"
      /></label>
    </div>
    <!-- Button tu submit Form -->
    <input type="submit" value="Submit your job application" />
  </form>
  <div v-else>
    <h6>Thank for submitting an application</h6>
    <p>Here is a summary of your applicatioo</p>
    <p>{{ formValues.formName }}</p>

    <p>Want to submit another application?</p>
    <button @click="restartForm">Click here</button>
  </div>

  <!-- If form has beenn submitted, display a thank you + info -->
</template>

<!-- JS  -->
<script setup>
import { ref, reactive, computed } from "vue";

// Showcasig how to use v-model in inital example
let message = ref("");

// Let's generate a simple form for users to submit their cv for a job proposal
// We will create a reactive variable to store the formData (such as name, dob, age, education....)
// We will connect this keys inisiude the reactive variable with inputs of my elements
let formValues = reactive({
  formName: "",
  age: null,
  workSummary: "",
  country: "",
  jobRelocation: [],
  experience: "",
  isSubmitted: false,
});

// THIS IS THE ONNE COONNECTED TO THE HTML
let submitFormDisplayInHtml = () => {
  // preventDefault() - this is the native method in JS to stop the form from reloading the pageXOffset. This is not used in vue since we use the @submit directive. In vue we can expad the submit directive with ann extra property called the prevent
  console.log("test....");

  // lets add a condition to prevent the alert from being displayed with an empty set of info
  if (formValues.formName === "" && formValues.jobRelocation.length === 0) {
    alert("Hey, please fill out all fields of the form");
  } else {
    // We want to turn the boolean value from false to true.
    formValues.isSubmitted = true;
  }
};

// function to restart form

let restartForm = () => {
  // Resetting all values into empty values
  formValues.formName = "";
  formValues.age = null;
  formValues.workSummary = "";
  formValues.country = "";
  formValues.jobRelocation = [];
  formValues.experience = "";
  // By swapping this boolean value back to false we display the form again
  formValues.isSubmitted = false;
};

// FUnction not used at the moment
// Functionn to recieve iformation from the form
let submitFormDisplayAsAlert = () => {
  // preventDefault() - this is the native method in JS to stop the form from reloading the pageXOffset. This is not used in vue since we use the @submit directive. In vue we can expad the submit directive with ann extra property called the prevent
  console.log("test....");

  // lets add a condition to prevent the alert from being displayed with an empty set of info
  if (formValues.formName === "" && formValues.jobRelocation.length === 0) {
    alert("Hey, please fill out all fields of the form");
  } else {
    alert(`
  !! Congratulations on Applying to Wu Tang Financial - Europe Division !!

  Informatio Submited:
  Applicant name: ${formValues.formName}
  Applicant age: ${formValues.age}
  Applicant work summary: ${formValues.workSummary}
  Applicant Country Origin: ${formValues.country}
  Applicant Selected Countries of relocation:
  ${formValues.jobRelocation}
  Years of Experience: ${formValues.experience}

  Thank you for your application. We will cotact you in the nnext 48-72 Hours.
  `);
  }
};
</script>

<!-- CSS -->
<!-- The scoped attribute means that only the CSS properties available inside this style tag will be applied inside this component and ONLY This component -->
<style scoped>
input,
textarea,
select {
  margin: 1rem auto;
}
pre {
  font-size: 24px;
}
div {
  display: flex;
  flex-direction: column;
}

.multiple-checkboxes {
  display: flex;
  flex-direction: row;
}

.form-class-container {
  min-width: 75%;
}

label {
  font-size: 1rem;
}

input[type="text"],
input[type="number"],
input[type="email"],
textarea,
select {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input[type="checkbox"],
input[type="radio"] {
  margin: 0 2rem 0 0;
}

#my-form div {
  padding: 1rem 0;
  /* border: 0.2px blue solid; */
}
</style>

<!-- INFO & CONTEXT -->

<!-- 
What is the v-model directive in Vue?

The v-model directive in Vue.js is a feature that allows you to bind a value from your component to a form element or input. It creates a two-way binding between the component's data and the form element, so changes in either will be reflected in the other.

Why is the v-model directive used in Vue?

The v-model directive is used to simplify data binding between the component's data and form elements, making it easier to keep the component's data and form elements in sync. This can reduce the amount of code you need to write and make your component more readable and maintainable.

How is the v-model directive used in the Composition API?

In the Composition API, the v-model directive can be used with a reactive ref to bind a value from the component's data to a form element. The reactive ref is used to create a reactive property that can be updated and used to store the form element's value. You can then use the v-model directive to bind the reactive ref to the form element, creating a two-way binding between the component's data and the form element.
-->
