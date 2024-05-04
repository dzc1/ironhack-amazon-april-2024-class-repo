// Generate variables to connect to specific html elements: chat, input-wrapper, input & send

const chat = document.querySelector("#chat");
const inputWrapper = document.querySelector("#input-wrapper");
const input = document.querySelector("#input");
const sendButton = document.querySelector("#send");

// Abstract
// We will have a function to generate each question and we will also have a "Recursive" function that will be conditioning for each step of the order process through the bot!

// Basics Expressions

// Variable to store an intitial quuestion count
let questionNumber = 1;

// Let's generate a little function that takes 1 parameter where the parameter will be used to provide a reply from the bot, given that we have more than 1 message to show the user this function will take care of displaying each message
const tacBotReply = (msg) => {
  // show message here
  showMessage(msg, "bot");
};

// Let's generate a little function that takes 1 parameter where the parameter will be used to provide a reply from the user, given that we have more than 1 message to show the user this function will take care of displaying each message
const userReply = (msg) => {
  // show message here
  showMessage(msg, "user");
};

// Function to be used to display the messages within the bot. Either from the user or bot, it will contain the HTML shells :)
const showMessage = (message, sender) => {
  // Let's condition by a string :)
  if (sender === "user") {
    chat.innerHTML += `
        <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <div class="avatar-container">
          <img class="avatar" src="./assets/imgs/user.svg" alt="User" />  
        </div>
      </section>
        `;
  } else if (sender === "bot") {
    chat.innerHTML += `
      <section class="bot-msg">
          <div class="avatar-container">
            <img src="./assets/imgs/chat.svg" alt="Bot" />
          </div>
          <div class="bubble bot-bubble">
            <p>${message}</p>
          </div>
        </section>
      `;
  }
  // Lets use the scrolltop property to always display messsages correctly
  chat.scrollTop = chat.scrollHeight;
};

// Lets generate a function to activate the first question!

// Question 1
const greeting = () => {
  // call the variable questionNumber and set it to 1
  questionNumber = 1;
  tacBotReply("Hello, tell me your name");
};
// ------

// Question 2 - Taco types
const showTacoTypes = (nameRecievedFromInput) => {
  // alert(nameRecievedFromInput);
  // we want to increase the question Number var +1 in order to properly condition it
  questionNumber++; // This ++ increases your var by 1
  // cal the tacoBotFunction
  tacBotReply(
    `Nice to meet you ${nameRecievedFromInput}, what type of tacos would you like to order?`
  );
  // We want to target the inputWrapper variable and inyect these buttons dynamically
  inputWrapper.innerHTML = `
    <button id="chickenBtn">Chicken</button>
    <button id="beefBtn">Beef</button>
    <button id="vegBtn">Vegetarian</button>
    `;

  // We can target these elements via dom
  // Chicken
  document
    .querySelector("#chickenBtn")
    .addEventListener("click", () => nextQuestion("Chicken"));
  // Beef
  document
    .querySelector("#beefBtn")
    .addEventListener("click", () => nextQuestion("Beef"));
  // Vegeatarian
  document
    .querySelector("#vegBtn")
    .addEventListener("click", () => nextQuestion("Vegetarian"));
};
// ------

// Question 3 - Taco Ingrediennts
const showTacoIngredients = (type) => {
  questionNumber++;
  tacBotReply(
    `Great choice, Select your preffered ingredients for your ${type} taco`
  );
  setTimeout(
    () =>
      tacBotReply(`Do you want some extra ingredients for your ${type} taco?`),
    1000
  );

  inputWrapper.innerHTML = `
    <input
        type="text"
        id="ingredients"
        placeholder="E.g., lettuce, tomato, cheese"
    />
    <button id="submitIngredients">Submit</button>
    `;

  document.querySelector("#submitIngredients").addEventListener("click", () => {
    let ingredients = document.querySelector("#ingredients").value;
    nextQuestion(ingredients);
  });
};
// ------

// Question 4 - Taco Salsa Types
const showSalsaTypes = (extraIngredients) => {
  questionNumber++;
  tacBotReply(`You have added the follolwing ingredients: ${extraIngredients}`);
  setTimeout(
    () => tacBotReply("What type of salsa would you like to add to your Tacos"),
    1000
  );

  input.innerHTML = `
    <select id="select">
        <option value="" selected disabled>👇 Select a salsa...</option>
        <option value="Salsa Verde">Salsa Verde</option>
        <option value="Pico de Gallo">Pico de Gallo</option>
        <option value="Chipotle">Chipotle</option>
    </select>
    `;

  const select = document.querySelector("#select");
  select.addEventListener("change", () =>
    nextQuestion(select.value, { ingredients: extraIngredients })
  );
};
// ------

// Question 5 - Show Price
const showPrice = (salsa, ingredients) => {
  questionNumber++;
  let price = "€8";
  tacBotReply(
    `Your tacos with ${salsa} and your added ingredients: "${ingredients}" will be prepared for you. That will come out to a total of ${price}. Do you want to confirm your order?`
  );

  inputWrapper.innerHTML = `
        <button id="restart">NO</button>
        <button id="confirm">YES</button>
    `;

  // If user decides no on order confirmaiton, we will reload the page
  document.querySelector("#restart").addEventListener("click", () => {
    tacBotReply(
      "Ok, no order will be processed, thak you we will start the bot again"
    );
    setTimeout(() => window.location.reload(), 5000);
  });
  // User selects yes, we will trigger next question
  document
    .querySelector("#confirm")
    .addEventListener("click", () => nextQuestion("Yes!"));
};
// -----

// Confirmation Message - last Step - RELOAD BOT HERE
const thankYouConfirmation = () => {
  tacBotReply(
    "Thank you for ordering tacos with us, hope you enjoy your order!!"
  );

  // Lets create a button to restart the bot
  inputWrapper.innerHTML = `<button id="restartBtn">Restart bot</button>`;

  document
    .querySelector("#restartBtn")
    .addEventListener("click", () => window.location.reload());
};

// Generate a function that will conditionally check for somehting we will use the questionNumber variable given that is an numeric value we can condition for a specific number
const nextQuestion = (message, additionalData) => {
  console.log(`Current Question number is ${questionNumber}`);

  // Let's start conditioning
  // If question = 1 we will get the user name and add some form of validation
  if (questionNumber === 1) {
    // Let's add some validation
    // If message param is not empty, we recieve info from the user
    if (message !== "") {
      // Get the message rom user using userReply function
      userReply(message);
      // Clear out input field
      input.value = "";
      // Use a setTimeout method to call for the next question which will be question 2 where we ask the user for the taco type
      setTimeout(() => showTacoTypes(message), 1000);
    }
    // Else message param is empty, we reply back to ther with the bot to give me user name
    else {
      // If user does not provide name, fire back tacoBotReply function to gather name
      tacBotReply("Hey, hey hey, come on don't you want to enjoy some tacos");
      // Wait 1 second to show second messsage
      setTimeout(() => tacBotReply("Tell me your name"), 1000);
    }
  } else if (questionNumber === 2) {
    // this will retrive the user options
    userReply(message);
    // Lets use a timeout to trirgger enext question 3
    setTimeout(() => showTacoIngredients(message), 1000);
  } else if (questionNumber === 3) {
    // this will retrive the user options
    userReply(message);
    // Lets use a timeout to trirgger enext question 4
    setTimeout(() => showSalsaTypes(message), 1000);
  } else if (questionNumber === 4) {
    // this will retrive the user options
    userReply(message);
    // Conddition if user does not send extra ingredients with order
    if (additionalData.ingredients) {
      setTimeout(() => showPrice(message, additionalData.ingredients), 1000);
    } else {
      // This isthe use case where the user does not send any additional ingredients to the order
      setTimeout(() => showPrice(message), 1000);
    }
    // Last step which is a thank you message!
  } else {
    userReply(message);
    setTimeout(thankYouConfirmation, 1000);
  }
};

// Lets connect the nextQuestion function to the send variable
sendButton.addEventListener("click", () => nextQuestion(input.value));

// THIS SETTIMEOUT IS LEFT AT THE END BECAUSE IS THE FIRST THING WE WANT TO EXECUTE BUT WE PLACE IT LAST WITHIN THE DOCUMENT
// Lets use the setTimeout Method to call this greeting function which is the initial question of the bot
setTimeout(greeting, 1000);
