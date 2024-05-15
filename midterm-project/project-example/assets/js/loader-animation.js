// Context
// We have a class in our css called 'display-none', that is dependant by using css>selection '.splash.display-none' to the .splash class.
// Using a bit of JS let's afd the 'ddisplay-none' class ffrom our css file using a window.object method+eventListener

const removeSplashAnimation = () => {
  const splash = document.querySelector(".splash");
  setTimeout(() => {
    // body off anon func
    splash.classList.add("display-none");
  }, 2000);
};

document.addEventListener("DOMContentLoaded", removeSplashAnimation);
