import { storage, auth } from "../../firebaseConfig.js";
import {
  uploadBytes,
  ref,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";

export default function () {
  const contentContainer = document.querySelector(".content");
  contentContainer.innerHTML = "";

  const h2 = document.createElement("h2");
  h2.textContent = "Upload your profile photo!";
  contentContainer.appendChild(h2);

  const form = document.createElement("form");
  form.setAttribute("id", "file-form");

  const input = document.createElement("input");
  input.setAttribute("id", "file-input");
  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/png, image/jpeg");

  const button = document.createElement("button");
  button.setAttribute("id", "file-form-submit-button");
  button.setAttribute("type", "submit");
  button.textContent = "Upload your file";

  form.appendChild(input);
  form.appendChild(button);

  contentContainer.appendChild(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const storageRef = ref(storage, `/users/${auth.currentUser.uid}/avatar`);

    const file = input.files[0];

    uploadBytes(storageRef, file)
      .then(() => console.log("success"))
      .catch(() => console.log("failed"));
  });
}
