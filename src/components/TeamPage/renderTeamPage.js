import renderTodoForm from "../TodoForm/renderTodoForm.js";
import {
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
import { firestore } from "../../firebaseConfig.js";

export default function () {
  const contentContainer = document.querySelector(".content");
  contentContainer.innerHTML = "";

  const h2 = document.createElement("h2");
  h2.textContent = "Your team's todos.";

  contentContainer.appendChild(h2);

  const form = renderTodoForm();

  contentContainer.appendChild(form);
  form.setAttribute("id", "teams-todo-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const todoText = document.getElementById("todo-input").value;
    const radios = [...document.getElementsByName("category")];
    const category = radios.find((el) => el.checked).value;

    addDoc(collection(firestore, "teams"), {
      todoText,
      category,
    })
      .then(() => console.log("Sukces"))
      .catch(() => console.log("porazka"));
  });

  const ul = document.createElement("ul");
  ul.setAttribute("id", "teams-todo-list");
  const readDocData = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, "teams"));
      querySnapshot.forEach((doc) => {
        const docs = doc.data();
        console.log(docs);
        const li = document.createElement("li");
        li.textContent = `${docs.todoText} (${docs.category})`;
        ul.appendChild(li);
      });
    } catch (err) {
      console.error(err);
    }
  };
  readDocData();
  contentContainer.appendChild(ul);
}
