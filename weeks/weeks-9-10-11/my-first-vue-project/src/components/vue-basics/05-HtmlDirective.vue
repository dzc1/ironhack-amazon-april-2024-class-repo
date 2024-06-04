<!-- HTML -->
<template>
  <div class="comps">
    <h2>Learning about html Directive's</h2>

    <!-- Plain HTML -->
    <div>
      <h2>Red Hot Chili Peppers</h2>
      <p>
        Red Hot Chili Peppers, also known as RHCP, is an influential American
        rock band formed in Los Angeles in 1983.
      </p>
      <img
        src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/CBDTFDX2RNHGBBTZMQLFITU25E.jpg"
        alt="Image of the Red Hot Chili Peppers"
      />
    </div>
    <hr />
    <!-- HTML inserted using v-html directive -->
    <div v-html="redHotChilliHtmlDirectiveContent"></div>
    <hr />
    <!-- HTML inserted using v-html directive - USING AN EXTERNAL API -->
    <button @click="fetchPost">Click Here to fetch info from the API</button>
    <div v-html="postContent"></div>
  </div>
</template>

<!-- JS  -->
<script setup>
import { ref, reactive, computed } from "vue";

let redHotChilliHtmlDirectiveContent = ref(`
<div>
      <h2>Red Hot Chili Peppers</h2>
      <p>
        Red Hot Chili Peppers, also known as RHCP, is an influential American
        rock band formed in Los Angeles in 1983. The band is known for its
        distinctive musical style that fuses alternative rock with funk, punk,
        and rap.
      </p>
      <img
        style="width: 50%"
        src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/CBDTFDX2RNHGBBTZMQLFITU25E.jpg"
        alt="Image of the Red Hot Chili Peppers"
      />
    </div>
`);

// Function Annd logic to bring info from json placeHolder (post/1) and display it in the template usinng a v-html directive.
// URL = https://jsonplaceholder.typicode.com/posts/1

//postContent
let postContent = ref("");
let url = ref("https://jsonplaceholder.typicode.com/posts/1");
// function expressiopn to bring Post 1 from resource
const fetchPost = async () => {
  try {
    // Var to use fetch method to bring info from url
    let response = await fetch(url.value);
    const postInfo = await response.json();
    console.log(postInfo);
    // Let's target the postContent ref vzriable and store some html inside of it.
    postContent.value = `
        <div>
            <h6>${postInfo.id}</h6>
            <h2>${postInfo.title}</h2>
            <p>${postInfo.body}</p>
        </div>
      `;
  } catch (error) {
    console.log("error fetching the post... ", error);
  }
};
</script>

<!-- CSS -->
<!-- The scoped attribute means that only the CSS properties available inside this style tag will be applied inside this component and ONLY This component -->
<style scoped>
img {
  width: 50%;
}

.img-rhcp {
  width: 50%;
}
</style>

<!-- Explanation -->
<!-- What are HTML Directives in Vue?
HTML directives in Vue, like v-html, are special attributes that Vue uses to bind dynamic HTML content to the DOM. They allow rendering and displaying HTML code dynamically based on your application's data.

Why Do We Use HTML Directives?

- Dynamic HTML Content: 
    HTML directives enable you to insert and render dynamic HTML content into your web pages. This means the content can change based on user input or other data changes in your application.

- Cleaner Code: 
    Using directives like v-html can make your template code cleaner and more readable. Instead of embedding complex HTML strings in your template, you can keep your templates simple and declarative.

- Reactivity: 
    Vue's reactivity system automatically updates the DOM whenever the underlying data changes. HTML directives are a part of this system, ensuring your UI stays in sync with your data.

Drawbacks and Things to Know About HTML Directives in Vue
While HTML directives in Vue are powerful and convenient, there are some considerations and potential drawbacks to be aware of:

- Security Risks:
  - Issue: Using v-html can expose your application to XSS (Cross-Site Scripting) attacks if the HTML content is not properly sanitized.
  - Solution: Always sanitize any HTML content coming from user input or untrusted sources before binding it using v-html.

- Limited Use Case:
  - Issue: v-html is intended for HTML content only and should not be used for binding plain text or other types of content.
  - Solution: Use text interpolation or other appropriate directives for non-HTML content.

- Performance:
  - Issue: Frequent updates to v-html content can lead to performance issues as the entire HTML structure needs to be re-rendered.
  - Solution: Minimize the use of v-html for content that changes frequently. -->
