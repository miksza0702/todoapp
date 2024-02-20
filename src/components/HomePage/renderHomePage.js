import { storage, auth } from "../../firebaseConfig.js";
import {
  ref,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";

export default function () {
  const contentContainer = document.querySelector(".content");
  contentContainer.innerHTML = "";

  const h2 = document.createElement("h2");
  h2.textContent = "Welcome";

  const p = document.createElement("p");
  p.textContent = "This is a simple web page written in vanilla JavaScript.";

  contentContainer.appendChild(h2);
  contentContainer.appendChild(p);

  // if(auth.currentUser){
  //   const storageRef = ref(storage, `/users/${auth.currentUser.uid}/avatar`)
  //   getDownloadURL(storageRef).then((url) => {
  //       const img = document.createElement("img");
  //       img.setAttribute("src", url);
  //       contentContainer.appendChild(img);
  //   });
  // }
  // console.log(content);
}
