const get3posts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const res = await response.json();
    const projectsContainer = document.querySelector(".projects-container");
    for (const post of res.slice(0, 3)) {
      const projectHTML = `
        <div class="project">
          <img src="./resources/images/projects-section/${post.id}.jpg" alt="">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <a href="project.html?p=${post.id}">Learn More</a>
        </div>`;
      projectsContainer.innerHTML += projectHTML;
    }
  } catch (error) {
    console.error("There was a problem fetching the posts:", error);
  }
};

window.addEventListener("load", get3posts);
