import renderTodoForm from "../TodoForm/renderTodoForm.js";
import {
  ref,
  onValue,
  push,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
import { auth, db } from "../../firebaseConfig.js";

const formListener = (event) => {
  const todoRef = ref(db, "todos/" + auth.currentUser.uid);
  event.preventDefault();
  const radios = [...document.getElementsByName("category")];
  const category = radios.find((el) => el.checked).value;

  const todoText = document.getElementById("todo-input").value;
  console.log(category, todoText);
  push(todoRef, {
    todoText,
    category,
  })
    .then(() => console.log("Pushed the data to db"))
    .catch((err) => console.log(err.message));
};

export default function () {
  const contentContainer = document.querySelector(".content");

  const todoRef = ref(db, "todos/" + auth.currentUser.uid);
  onValue(todoRef, (snapshot) => {
    const data = snapshot.val();
    if (!data) {
      contentContainer.innerHTML = "";

      const h2 = document.createElement("h2");
      h2.textContent = "Add, remove and edit your todos";
      contentContainer.appendChild(h2);

      const todoForm = renderTodoForm();

      contentContainer.appendChild(todoForm);

      todoForm.addEventListener("submit", formListener);
    } else {
      const todos = Object.values(data);
      console.log(todos);
      const h2 = document.createElement("h2");
      h2.textContent = "Add, remove and edit your todos";
      const listItems = todos.map((el, i) => {
        const li = document.createElement("li");
        li.setAttribute("id", `li-${i}`);
        const div = document.createElement("div");
        div.setAttribute("id", `div-${i}`);
        const span = document.createElement("span");
        span.textContent = `${el.todoText} (${el.category})`;
        const button1 = document.createElement("button");
        button1.setAttribute("id", `edit-button-${i}`);
        button1.setAttribute("class", "edit-button");
        button1.textContent = "edit";
        const button2 = document.createElement("button");
        button2.setAttribute("id", `remove-button-${i}`);
        button2.setAttribute("class", "remove-button");
        button2.textContent = "remove";

        div.appendChild(span);
        div.appendChild(button1);
        div.appendChild(button2);
        li.appendChild(div);
        return li;
      });
      const ul = document.createElement("ul");
      listItems.forEach((el) => ul.appendChild(el));
      contentContainer.innerHTML = "";
      const todoForm = renderTodoForm();
      contentContainer.appendChild(h2);
      contentContainer.appendChild(todoForm);
      contentContainer.appendChild(ul);
      todoForm.addEventListener("submit", formListener);

      const editButtons = [...document.getElementsByClassName("edit-button")];

      editButtons.forEach((el, i) => {
        el.addEventListener("click", () => {
          el.remove();
          const div = document.getElementById(`div-${i}`);
          const form = renderTodoForm();
          form.setAttribute("id", `todo-form-${i}`);
          div.appendChild(form);
          form.addEventListener("submit", function (event) {
            event.preventDefault();
            const todoText = this.childNodes[0].value;
            const category = [...this.getElementsByTagName("input")]
              .slice(1, 5)
              .find((el) => el.checked).value;
            const updates = {};
            updates[`todos/${auth.currentUser.uid}/${Object.keys(data)[i]}`] = {
              category,
              todoText,
            };
            update(ref(db), updates);
          });
        });
      });

      //remove
      const removeButtons = [
        ...document.getElementsByClassName("remove-button"),
      ];
      removeButtons.forEach((el, i) => {
        el.addEventListener("click", function () {
          this.parentElement.parentElement.remove();
          remove(
            ref(db, `todos/${auth.currentUser.uid}/${Object.keys(data)[i]}`)
          );
        });
      });
    }
  });
}
