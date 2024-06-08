<!-- This File is the top-level file of your app -->
<!-- A good convention is to always use the naming-convention called PascalCase convention -->

<!-- The 3 TAGS
Any Vue file contains these 3 tags! -->

<!-- Script Tag is where we write our javascript, also thiss tag iss where we will be importing other tags, other files -->

<!-- The Template Tag - this tag serves to innyect/use/apply any html elements that you already know -->

<!-- The Style Tag - is the tag that we use to pass any CSS to the file! -->

<!-- This is where you inyect Javscript -->
<script setup>
// import HelloWorld from "./components/HelloWorld.vue";
import FirstComp from "./components/vue-basics/01-FirstComp.vue";
import FirstReactiveComp from "./components/vue-basics/02-FirstReactiveComp.vue";
import TextDirectives from "./components/vue-basics/04-TextDirectives.vue";
import HtmlDirectives from "./components/vue-basics/05-HtmlDirective.vue";
import ConditionalDirective from "./components/vue-basics/06-ConditionalDirective.vue";
import IterationDirective from "./components/vue-basics/07-IterationDirective.vue";
import BindDirective from "./components/vue-basics/08-BindDirective.vue";
import FormDirective from "./components/vue-basics/09-FormDirective.vue";

// Ex's
import VForEx from "./components/exercises/02-Vfor.vue";
</script>

<!-- This is where you write your HTML -->
<template>
  <div>
    <h1>Leaarning Vue.js</h1>
  </div>
  <!-- Coomps Here -->
  <div class="border">
    <!-- <FirstReactiveComp /> -->

    <!-- Text Directive Comp  -->
    <!-- <TextDirectives /> -->

    <!-- Html Directive Comp  -->
    <!-- <HtmlDirectives /> -->

    <!-- Conditional Directive Comp  -->
    <!-- <ConditionalDirective /> -->

    <!-- Iteration Directive Comp  -->
    <!-- <IterationDirective /> -->

    <!-- Binding Directive Comp  -->
    <!-- <BindDirective /> -->

    <!-- Form Directive Comp -->
    <FormDirective />
  </div>

  <div id="excercises">
    <!-- <VForEx /> -->
  </div>

  <!-- Uncomment Here to see in order -->
  <!-- 1 -->
  <!-- <FirstComp /> -->
  <!-- 2 -->

  <!-- This is how a Vue component is applied inside the template(html) tag -->
  <!-- By nature, they are self-closing -->
  <!-- Let's uncomment when we get to props -->
  <!-- <HelloWorld msg="Hello Students" /> -->
</template>

<!-- This is where you write CSS Specific to this file -->
<!-- The 'scoped' attribute when placed inside the opening style tag of any .vue file means that style will be applied **only** to the elements inside the same file -->
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
