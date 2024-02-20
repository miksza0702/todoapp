import { auth } from "../../firebaseConfig.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import renderHomePage from "../HomePage/renderHomePage.js";

export default () => {
  const contentContainer = document.querySelector(".content");
  contentContainer.innerHTML = "";

  const form = document.createElement("form");
  form.setAttribute("id", "register-form");

  const inputEmail = document.createElement("input");
  inputEmail.setAttribute("id", "register-email-input");
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("placeholder", "email");

  const inputPasswordFirst = document.createElement("input");
  inputPasswordFirst.setAttribute("id", "register-first-input-password");
  inputPasswordFirst.setAttribute("type", "password");
  inputPasswordFirst.setAttribute("placeholder", "password");

  const inputPasswordSecond = document.createElement("input");
  inputPasswordSecond.setAttribute("id", "register-second-input-password");
  inputPasswordSecond.setAttribute("type", "password");
  inputPasswordSecond.setAttribute("placeholder", "password");

  const buttonRegister = document.createElement("button");
  buttonRegister.setAttribute("type", "submit");
  buttonRegister.textContent = "Register";

  form.appendChild(inputEmail);
  form.appendChild(inputPasswordFirst);
  form.appendChild(inputPasswordSecond);
  form.appendChild(buttonRegister);

  contentContainer.appendChild(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = inputEmail.value;
    const password1 = inputPasswordFirst.value;
    const password2 = inputPasswordSecond.value;

    if (password1 === password2) {
      // console.log("hasla ok");
      createUserWithEmailAndPassword(auth, email, password1).then(
        (userCredentials) => console.log(userCredentials)
      );
      renderHomePage();
    } else {
      alert("Hasła się nie zgadzają");
      console.log("hasla nie okej");
    }
  });
};
