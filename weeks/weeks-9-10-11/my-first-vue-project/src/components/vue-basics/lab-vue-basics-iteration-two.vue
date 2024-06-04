<!-- HTML -->
<template>
  <h4>
    Iteration 2 | Display the result of a JavaScript operation in a component's
    HTML
  </h4>
  <p>
    You've already practiced showing a string inside a Vue component's template using mustache syntax ({{}}). You've also seen that strings are not the only things you can insert on your HTML using this technique.

    <ul>
        This challenge has two parts:


        <li>First, you just need to insert a mathematical operation inside your HTML and see what happens. Something as simple as 2 + 2 is enough here.</li>
        <li>

            Then, the real challenge begins: you have to "print" a string on your template, with a twist: this string has to be returned by a function and read the data stored in other reactive variables. Hint: this article can shed some light on how you can do this.
        </li>
    </ul>


    <h2>{{ 2 + 2 }}</h2>
    <h3>{{ pritnOutStringFromFunc() }}</h3>
    <h3>{{ printNenadsReactiveInfo() }}</h3>
    <h3>{{ printNenadsReactiveInfoTwo() }}</h3>


    <div>

        <h5>add Two numbers</h5>
        <input v-model="numberOne" type="number">
        <span>+</span>
        <input v-model="numberTwo" type="number">
        <p>Result = IS going to be..... <span class="result">{{ resultOfOperation }}</span></p>
    </div>
  </p>
</template>

<!-- JS  -->
<script setup>
import { ref, reactive, computed } from "vue";


let myInfo = reactive({
    name: 'Nenad',
    age: 33
})

let myInfoTwo = ref("Nenadd")

const printNenadsReactiveInfo = () => {
    // return myInfo.name
   return `Hello My name is ${myInfo.name} and i am ${myInfo.age} years old`
}

const printNenadsReactiveInfoTwo = () => {
    return myInfoTwo.value
}



const pritnOutStringFromFunc = () => {
    // 1st way -  usig return 
    //return "I love to run 10 km's"

    // 2nd way - using a variable to store the strig and then return the variable 
    let myString = "I love to run 15 kms"
    return myString
}

// USING COMPUTED PROEPRTY TO HAVE a REAL TIME ADDITION CALCULATOR WITH 2 simple INPUT of NUMBERS
const numberOne = ref(0);
const numberTwo = ref(0);
const resultOfOperation = computed(() => {
    return numberOne.value + numberTwo.value
})

</script>

<!-- CSS -->
<!-- The scoped attribute means that only the CSS properties available inside this style tag will be applied inside this component and ONLY This component -->
<style scoped>

.result{
    font-weight:bold;

    font-size: 42px;
}
</style>

<!-- Vue Component Tips -->
<!-- 1. Always name your component in PascalCase, ex: MyFirstComponent -->
<!-- 2. Vue.js components have a .vue extension file -->
<!-- 3. TO AVOID ANY CONFUSIONN, YOU CAN COPY THIS FILE AND DELETE THE COMMENTS TO GET YOU STARTED -->
