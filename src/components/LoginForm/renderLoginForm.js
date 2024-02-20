// signIn
import { auth } from "../../firebaseConfig.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import renderHomePage from "../HomePage/renderHomePage.js";

export default () => {
  // const contentContainer = document.querySelector(".content");
  // contentContainer.innerHTML = "";

  const form = document.createElement("form");
  form.setAttribute("id", "login-form");

  const emailInput = document.createElement("input");
  emailInput.setAttribute("id", "input-email");
  emailInput.setAttribute("placeholder", "email");
  emailInput.setAttribute("type", "email");

  const passwordInput = document.createElement("input");
  passwordInput.setAttribute("id", "input-password");
  passwordInput.setAttribute("placeholder", "password");
  passwordInput.setAttribute("type", "password");

  const buttonLogin = document.createElement("button");
  buttonLogin.setAttribute("type", "submit");
  buttonLogin.textContent = "Sign in";

  form.appendChild(emailInput);
  form.appendChild(passwordInput);
  form.appendChild(buttonLogin);

  // contentContainer.append(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        //signed in
        // const user = userCredentials.user;
        console.log(userCredentials);
        console.log("ZALOGOWANO");
        renderHomePage();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  });

  return form;
};
