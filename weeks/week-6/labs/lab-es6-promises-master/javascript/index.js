// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  1,
  (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  2,
  (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  3,
  (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  4,
  (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  },
  (error) => console.log(error)
);

// Iteration 1 - using callbacks
getInstruction(
  "mashedPotatoes",
  0,
  (step) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
    // We're calling the same function with changes to receive the next step
    // Callback step - 2
    getInstruction(
      "mashedPotatoes",
      1,
      //  () => {} // callback
      (step) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step}</li>`;
        // We're calling the same function with changes to receive the next step
        // Callback step - 3
        getInstruction(
          "mashedPotatoes",
          2,
          //  () => {} // callback
          (step) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step}</li>`;
            // We're calling the same function with changes to receive the next step
            // Callback step - 4
            getInstruction(
              "mashedPotatoes",
              3,
              //  () => {} // callback
              (step) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step}</li>`;
                // We're calling the same function with changes to receive the next step
                // Callback step - 5
                getInstruction(
                  "mashedPotatoes",
                  4,
                  //  () => {} // callback
                  (step) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step}</li>`;
                    // We're calling the same function with changes to receive the next step
                    // Callback step - 4
                    getInstruction(
                      "mashedPotatoes",
                      5,
                      //  () => {} // callback
                      (step) => {
                        document.querySelector(
                          "#mashedPotatoes"
                        ).innerHTML += `<li>${step}</li>`;
                        // Logic to remove the "HIDDEN" attribute from the img element containing the image
                        document
                          .querySelector("#mashedPotatoesImg")
                          .removeAttribute("hidden");
                      },
                      (error) => console.log(error)
                    );
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    setTimeout(() => {
      document.querySelector("#steak").innerHTML += `<li>Steak is ready</li>`;
      document.querySelector("#steakImg").removeAttribute("hidden");
    }, 1000);
  })
  .catch((error) => console.log(error));

// Iteration 3 using async/await
// const makeBroccoli = async () => {
//   // We want to depend on a variable to be able to point to the obtainInstruction() function to pass it the type of food + list position
//   // Step 0
//   let step0 = await obtainInstruction("broccoli", 0);
//   document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
//   // Step 1
//   let step1 = await obtainInstruction("broccoli", 1);
//   document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
//   // Step 2
//   let step2 = await obtainInstruction("broccoli", 2);
//   document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
//   // Step 3
//   let step3 = await obtainInstruction("broccoli", 3);
//   document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
//   // Step 4
//   let step4 = await obtainInstruction("broccoli", 4);
//   document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
//   // Step 5
//   let step5 = await obtainInstruction("broccoli", 5);
//   document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
//   // Step 6
//   let step6 = await obtainInstruction("broccoli", 6);
//   document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
//   // Step 7 - Hardcoded
//   setTimeout(() => {
//     document.querySelector(
//       "#broccoli"
//     ).innerHTML += `<li>Broccoli is ready</li>`;
//     document.querySelector("#broccoliImg").removeAttribute("hidden");
//   }, 1000);
// };
// makeBroccoli();

// Iteration 3 using async/await & a try/catch
const makeBroccoliTryCatch = async () => {
  try {
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 0)}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 1)}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 2)}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 3)}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 4)}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 5)}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 6)}</li>`;
    setTimeout(() => {
      document.querySelector(
        "#broccoli"
      ).innerHTML += `<li>Broccoli is ready</li>`;
      document.querySelector("#broccoliImg").removeAttribute("hidden");
    }, 1000);
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
makeBroccoliTryCatch();

// Bonus 2 - Promise all
// Bonus 2 - Using async/await + try/catch
let step0 = obtainInstruction("brusselsSprouts", 0);
let step1 = obtainInstruction("brusselsSprouts", 1);
let step2 = obtainInstruction("brusselsSprouts", 2);
let step3 = obtainInstruction("brusselsSprouts", 3);
let step4 = obtainInstruction("brusselsSprouts", 4);
let step5 = obtainInstruction("brusselsSprouts", 5);
let step6 = obtainInstruction("brusselsSprouts", 6);
let step7 = obtainInstruction("brusselsSprouts", 7);

// const makeBrusselsSprouts = async () => {
//   try {
//     // Let's create a variable that depends on the await keyword and use the Promise constructor along with a method called Promise.all(), and inside this method, we'll declare an array with the 7 steps remember it's an array and we count from 0 coming from the BrusselSprouts array.
//     let values = await Promise.all([
//       step0,
//       step1,
//       step2,
//       step3,
//       step4,
//       step5,
//       step6,
//       step7,
//     ]);
//     values.forEach((individualStepFromArray) => {
//       console.log(individualStepFromArray);
//       document.querySelector(
//         "#brusselsSprouts"
//       ).innerHTML += `<li>${individualStepFromArray}</li>`;
//     });
//     setTimeout(() => {
//       document.querySelector(
//         "#brusselsSprouts"
//       ).innerHTML += `<li>Brussels Sprouts are ready!</li>`;
//       document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
//     }, 1000);
//   } catch (error) {
//     console.log(error);
//     alert(error);
//   }
// };
// makeBrusselsSprouts();

// Using promises without async/await and using dependency on the .then() method
const brusselsSproutsPromiseAll = () => {
  Promise.all([step0, step1, step2, step3, step4, step5, step6, step7])
    // We use this first dependency of the .then() method to iterate over all the promises we want to commit to :)
    .then((arrayOfSteps) => {
      // Iterate the array using a forEach method
      arrayOfSteps.forEach((individualStep) => {
        console.log(individualStep);
        // DOM Manipulation to insert each step of the array into the document
        document.querySelector(
          "#brusselsSprouts"
        ).innerHTML += `<li>${individualStep}</li>`;
      });
      // Use a timer to add <li> element + remove hidden attribute from the img
      setTimeout(() => {
        document.querySelector(
          "#brusselsSprouts"
        ).innerHTML += `<li>Brussels Sprouts are ready!</li>`;
        document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
      }, 1000);
    });
  document.querySelector(
    "#brusselsSprouts"
  ).innerHTML += `<li>Brussels Sprouts are ready!</li>`;
};
brusselsSproutsPromiseAll();
