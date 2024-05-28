const sendForm = async (preventForm) => {
  preventForm.preventDefault();
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let phone = document.querySelector("#phone").value;
  let message = document.querySelector("#message").value;

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: name,
        body: `${email} ${phone} ${message}`,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (response.status === 201) {
      document.querySelector(".alert").style.display = "block";
      setTimeout(
        () => (document.querySelector(".alert").style.display = "none"),
        6000
      );
      document.getElementById("form-message").reset();
    } else {
      document.querySelector(".alert-wrong").style.display = "block";
      setTimeout(
        () => (document.querySelector(".alert-wrong").style.display = "none"),
        6000
      );
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error("Error occurred:", error);
  }
};

document.querySelector("#form-message").addEventListener("submit", sendForm);
