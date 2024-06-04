<!-- HTML -->
<template>
  <div class="comps">
    <h3>conditional directives</h3>

    <!-- v-if -->
    <div id="v-if">
      <h4>{{ number }}</h4>
      <!-- Equal to 0 -->
      <div v-if="number === 0">
        <p>Will be shown if the number variable is equal to 0</p>
      </div>
      <!-- Less than or eauql to 4 -->
      <div v-if="number <= 4">
        <p>Will be shown if the number variable is less than or equal to 4</p>
      </div>
      <!-- Greater than or eauql to 8 -->
      <div v-if="number >= 8">
        <p>
          Will be shown if the number variable is greater than or equal to 8
        </p>
      </div>
    </div>
    <!-- v-if & v-else  -->
    <div id="v-if-v-else">
      <p v-if="numberElse <= 4">
        Will be shown if the number variable is less than or equal to 4
      </p>
      <p v-else>
        Will be shown if the number variable is greater than or equal to 8
      </p>
    </div>
    <div id="v-if-v-else-if-v-else">
      <!-- v-if -->
      <p v-if="numberElseIf > 10">Print if Number is biggger than 1000</p>
      <!-- v-else-if -->
      <p v-else-if="numberElseIf >= 0 && numberElseIf <= 10">
        Print if Number is biggger than 10000
      </p>
      <p v-else-if="numberElseIf === 0">Number is 0</p>
      <!-- v-else -->
      <p v-else>Print if number is bigger than 20</p>
    </div>
  </div>
</template>

<!-- JS  -->
<script setup>
import { ref, reactive, computed } from "vue";

//Variable To us to  condition
let number = ref(100);

let numberElse = ref(2);

let numberElseIf = ref(0);
</script>

<!-- CSS -->
<style scoped></style>

<!-- -- -->
<!-- -- -->
<!-- -- -->
<!-- -- -->
<!-- EXPLANATION: -->

<!-- The "v-if", "v-else-if" and "v-else" directives in Vue are used to control the conditional rendering of elements in the user interface based on conditional expressions.

"v-if" is used to show or hide an HTML element based on a conditional expression. If the expression is true, the element will be displayed in the DOM; otherwise, it will be hidden.

"v-else-if" is used to add an additional condition if the expression in the previous "v-if" is false and you want to evaluate another conditional expression. It can only be used after a "v-if" or "v-else-if" directive and will be evaluated if the previous condition is false and its own condition is true.

"v-else" is used as the last condition in a series of "v-if" or "v-else-if" directives. If all previous conditions are false, "v-else" will execute and the associated element will be displayed.

These directives are useful when you want to show or hide UI elements based on different conditions. They allow you to create conditional logic within Vue components and generate dynamic content based on the state of the application or defined properties. By using "v-if", "v-else-if" and "v-else", it is possible to create complex conditional rendering flows and adapt the user interface to specific needs. -->
