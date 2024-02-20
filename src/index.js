import renderHomePage from "../src/components/HomePage/renderHomePage.js";
import renderLoginPage from "../src/components/LoginPage/renderLoginPage.js";
import { auth, storage } from "../src/firebaseConfig.js";
import {
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import renderTodoPage from "../src/components/TodoPage/renderTodoPage.js";
import renderTeamPage from "../src/components/TeamPage/renderTeamPage.js";
import renderStoragePage from "../src/components/StoragePage/renderStoragePage.js";
import {
  ref,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";

// Selecting navbar anchors
const homeButton = document.getElementById("home-anchor");
const todosButton = document.getElementById("todos-anchor");
const storageButton = document.getElementById("storage-anchor");
const publicButton = document.getElementById("public-anchor");
const loginButton = document.getElementById("login-anchor");

//selection the contetn section
const contentContainer = document.querySelector(".content");

//Reacting to auth state change
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(`User is logged in (${user.email}), onAuthStateChanged`);
    loginButton.textContent = "Log out";
    const h2 = document.querySelector("h2");
    if (h2.textContent === "Welcome") {
      const storageRef = ref(storage, `/users/${auth.currentUser.uid}/avatar`);
      getDownloadURL(storageRef).then((url) => {
        const img = document.createElement("img");
        img.setAttribute("src", url);
        contentContainer.appendChild(img);
      });
    }
  } else {
    console.log("No user logged in. onAuthStateChanged");
    loginButton.textContent = "Log in";
  }
});

// Rendering the home page on initial page load
renderHomePage();
// renderRegisterForm();

// NavBar buttons listeners

// Home button
homeButton.addEventListener("click", () => {
  renderHomePage();
});

// Todos button
todosButton.addEventListener("click", () => {
  contentContainer.innerHTML = "";
  const user = auth.currentUser;
  user ? renderTodoPage() : renderLoginPage();
});

//public button
publicButton.addEventListener("click", () => {
  contentContainer.innerHTML = "";
  renderTeamPage();
});

//storage button
storageButton.addEventListener("click", () => {
  // contentContainer.innerHTML = "";
  renderStoragePage();
});

loginButton.addEventListener("click", () => {
  // contentContainer.appendChild(renderLoginPage());
  // renderLoginPage();

  //jezeli user istnieje to klikniecie na ten button ma wywolac funkcje signOut i wywolac renderHomePage
  //jezeli user nie istnieje to klikniecie na ten button ma wywolac funkcje renderLoginPage
  if (auth.currentUser) {
    signOut(auth)
      .then(() => renderHomePage())
      .catch((err) => console.log(err));
  } else {
    renderLoginPage();
  }
});
