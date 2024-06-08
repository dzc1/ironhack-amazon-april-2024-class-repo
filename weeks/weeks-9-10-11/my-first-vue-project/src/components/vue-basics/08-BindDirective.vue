<!-- HTML -->
<template>
  <!-- Learning how to  bind id's  -->
  <div>
    <!-- Old School way,  -->
    <h2 id="someRandomId">Element with an id like the old school way</h2>
    <!-- Taargetting using the bind directive -->
    <!-- Bind it to the ID attribute -->
    <!-- LONG WAY OF BINDING -->
    <h2 v-bind:id="bindToMyId">
      Element with an id that is binded dynamically using vue js- Using the long
      syntax approach
    </h2>
    <!-- Taargetting using the bind directive -->
    <!-- Bind it to the ID attribute -->
    <!-- SHORT WAY OF BINDING -->
    <h2 :id="bindToMyId">
      Element with an id that is binded dynamically using vue js- Using the
      Short syntax approach
    </h2>
    <!-- Think about it???
    At the end? 
    We use ids, classes or inline-styles to either target elements to style them or to add some logic to them! 
    Most of the time you will use id="" or class="" or styles="" 
    
    USING VUE - LONG WAY 
    v-bind:id="" or v-bind:class="" or v-bind:styles=""

    SHORT WAAY OF BINDING TO ATTRIBUTE's JUST USE the : befor the attribute that you want to bind to
    :id="" or :class="" or :styles=""
-->
  </div>
  <!-- ---- -->
  <!-- ---- -->
  <!-- ---- -->

  <div>
    <!-- Bind Attributes such as Reserved attributes -->

    <!-- Case 1 - Binding a value via a reactive variable with a default boolean value -->
    <!-- Without binding with the v-bind directive -->
    <button disabled>Click Me</button>

    <!-- Version 1 - Using v-bind - long syntax -->
    <button v-bind:disabled="isDisabled">Click Me - v-bind long syntax</button>
    <!-- Version 2 - Using v-bind - short syntax + explanation that only binidng to ATTRIBUTES can be shortened, you CANNOT shorten the [v-for, v-text- v-conditionals] -->
    <button :disabled="buttonLogic.boolean" v-text="buttonLogic.content" />
    <!-- Version 2 - Using v-bind - short syntax + opposite case to to the disbaled! -->
    <!-- WTF is the opposite case?  -->
    <!-- Given thaat the disabled is a boolean attribute property by default we can trigger using the TRUE or FALSE or we can trigger it by using the OPPOSITE of true or false which the oppostie using the NOT operator 
Example
!buttonLogic.boolean = we are coniditioning to the oppposite of what the current value is -->
    <button :disabled="!buttonLogic.boolean" v-text="buttonLogic.content" />

    <!-- Add more logic to this button!  -->
    <!-- We will be displaying either ifTrueContent or ifFalseContent depending if the buttonLogic.boolean key is true or false -->

    <!-- Referesher on the TERNARY OPERATOR 
TERNARY OPERATOR is a conditional operator in JS -->

    <!-- SYNTAX
variableToTarget ? contentYouWantToDisplayIFVariableTOTargetIsTrue : contentToDisplayIfVariableIsFalse

syntax according to the example on variable name buttonLogic
buttonLogic.boolean ? buttonLogic.ifTrueContent : buttonLogic.ifFalseContent

remember that we are just displaying text dependding on true or false context

-->
    <button :disabled="buttonLogic.boolean">
      {{
        buttonLogic.boolean
          ? buttonLogic.ifFalseContent
          : buttonLogic.ifTrueContent
      }}
    </button>
    <!-- TEXT inisde the condition as string -->
    <button :disabled="buttonLogic.boolean">
      {{
        buttonLogic.boolean
          ? "Oh no,, button is disabled you cannot click me."
          : "You can click me"
      }}
    </button>
  </div>

  <!-- ---- -->
  <!-- ---- -->
  <!-- ---- -->

  <div>
    <!-- Binding Classes -->
    <!-- Long Syntax -->
    <h4 v-bind:class="dynamicClass">
      I am an element with a dynamic binded class - Long
    </h4>
    <!-- Short Syntax -->
    <h4 :class="dynamicClass">
      I am an element with a dynamic binded class - Short
    </h4>

    <!-- ---- -->
    <!-- ---- -->

    <!-- Binding an arraya of classes into an element -->
    <!-- Short Syntax Binding -->
    <div :class="arrayOfClaases">
      <h5>I am an element that my parent has some binded classes</h5>
    </div>

    <!-- ---- -->
    <!-- ---- -->
    <!-- Little Scenario!  -->
    <!-- We are a movie theater owners and we have 2 new movies that will come out this week
    We have inception and we have AwfulMovie -->
    <!-- First case - Using long syntax binidng -->
    <div>
      <div>
        <h5
          v-bind:class="
            !isPromotedMovie ? 'promoted-movie' : 'not-promoted-movie'
          "
        >
          Inception
        </h5>

        <h5
          v-bind:class="
            !isPromotedMovie ? 'not-promoted-movie' : 'promoted-movie'
          "
        >
          Awful Movie
        </h5>
        <!-- Explaation -->
        <!-- since we are adding the promoted-class to the element depneding on a number which we use to mimic a time, we add the class dynmiclly using the logical operator && -->
        <h5 v-bind:class="timeToAddMoreVisibility >= 9 && 'promoted-movie'">
          Inception
        </h5>
      </div>
    </div>
  </div>

  <!-- ---- -->
  <!-- ---- -->
  <!-- ---- -->

  <div>
    <!-- Inline Style -->
    <h4 style="font-size: 34px; color: red">
      Binding Styles using vue js with the bind directive
    </h4>
    <!-- Binding Styles -->
    <h4
      v-bind:style="{
        fontSize: inlineStyleProperties.fontSize,
        color: inlineStyleProperties.color,
        textDecoration: 'underline',
        width: '200px',
      }"
    >
      Binding Styles using vue js with the bind directive
    </h4>
  </div>

  <!-- ---- -->
  <!-- ---- -->
  <!-- ---- -->
  <h5 v-bind:class="classBinding" @click="toggleClass">Toggle Class</h5>
  <h5>Toggle Id</h5>
  <h5>Toggle Style</h5>
</template>

<!-- JS  -->
<script setup>
import { ref, reactive, computed } from "vue";

// Var linked to element on line 8
let bindToMyId = ref("title-heading");

// ------
// ------

// Binding reserved Attributes
let isDisabled = ref(true);
let textInsideButton = ref;

let buttonLogic = reactive({
  boolean: false,
  content: "Click Me - v-bind short syntax + content inside using v-html",
  ifTrueContent: "You can click me",
  ifFalseContent: "Oh no,, button is disabled you cannot click me.",
});

// ------
// ------

// Binding Class Attributes
let dynamicClass = ref("my-first-dynamic-class");
let arrayOfClaases = reactive(["arg-one", "arg-two", "arg-three"]);

// Movie Theater Example - Related to binding classes in vue
let isPromotedMovie = ref(false);
let timeToAddMoreVisibility = ref(9);

// ------
// ------

// Binding Style Attributes
let inlineStyleProperties = reactive({
  fontSize: "34px",
  color: "red",
});

// EXAMPLES USInG FUNCTIONS

// Class Example
let classBinding = ref("original-class");
function toggleClass() {
  classBinding.value =
    classBinding.value === "original-class"
      ? "toggled-class"
      : "original-class";
}

let idBinding = ref("original-id");
let styleBinding = reactive({
  backgroundColor: "blue",
});
</script>

<!-- CSS -->
<!-- The scoped attribute means that only the CSS properties available inside this style tag will be applied inside this component and ONLY This component -->
<!-- CSS with scoped attribute here -->
<style scoped>
button {
  display: block;
  margin: 1rem 0rem;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 20px;
}

/* id' binding */
#title-heading {
  color: red;
}

/* Class Binding */
.my-first-dynamic-class {
  color: red;
}
.my-first-dynamic-class-static {
  text-transform: uppercase;
}

/* Class Binding - Array */
.arg-one {
  color: blue;
}
.arg-two {
  text-decoration: line-through;
}
.arg-three {
  font-style: italic;
}

/* Class Binding - Using Conditions */
.promoted-movie {
  color: blue;
  font-style: italic;
}
.not-promoted-movie {
  color: red;
  text-decoration: line-through;
}

/* Toggle Class Binding */
.original-class {
  color: red;
}
.toggled-class {
  color: green;
}
.original-class:hover,
.toggled-class:hover {
  text-decoration: underline;
  cursor: pointer;
}

/* Toggle ID Binding */
#original-id {
  background-color: white;
}
#toggled-id {
  background-color: yellow;
}
</style>

<!-- Explanation of v-bind Directive -->
<!-- 
The v-bind directive in Vue.js is used to dynamically bind one or more attributes, or a component prop, to an expression. When the expression changes, the bound attribute or prop will be updated.

The v-bind directive can be used in two ways: 
1. Long syntax: v-bind:attribute="expression"
2. Short syntax: :attribute="expression"

This directive is helpful for:
1. Dynamically binding element IDs.
2. Binding boolean attributes, such as `disabled`.
3. Binding CSS classes and inline styles to reactive data.
4. Binding multiple attributes at once using an object.

By using v-bind, we can create highly dynamic and reactive user interfaces that update automatically when the underlying data changes.
-->
