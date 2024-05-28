let linkProject = document.querySelector(".projectLink");
let linkService = document.querySelector(".serviceLink");

const scrollToProjects = () => {
  let projectsSection = document.querySelector("#projects");
  console.log(projectsSection);
  projectsSection.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
};

const scrollToServices = () => {
  let serviceSection = document.querySelector("#services");
  serviceSection.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
};

linkProject.addEventListener("click", scrollToProjects);
linkService.addEventListener("click", scrollToServices);

// Scroll To Top
/* window.addEventListener("scroll", () => {
  let scrollFixedElement = document.querySelector(".show");
  let verticalAxis = document.documentElement.scrollTop;
  verticalAxis >= 100 ? scrollFixedElement.classList.toggle("sticky") : "";
}); */


let scrollTopElement = document.querySelector(".show");

// Adding setTimeout() so "scroll to top" bar won't appear while splash page is on display
if (window.innerWidth > 990) setTimeout(() => {
  window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollTopElement.classList.add("sticky");
    } else {
      scrollTopElement.classList.remove("sticky");
    }
  });
}, 2500);
else window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopElement.classList.add("sticky");
  } else {
    scrollTopElement.classList.remove("sticky");
  }
});

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

scrollTopElement.addEventListener("click", scrollTop);
