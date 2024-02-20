export default () => {
  const form = document.createElement("form");
  form.setAttribute("id", "todo-form");

  const input = document.createElement("input");
  input.setAttribute("id", "todo-input");

  const fieldset = document.createElement("fieldset");
  fieldset.setAttribute("id", "todofieldset");

  const legend = document.createElement("legend");
  legend.textContent = "Select a category";

  //WORK DIV
  const workDiv = document.createElement("div");
  workDiv.setAttribute("id", "div-work");

  const inputRadio1 = document.createElement("input");
  inputRadio1.setAttribute("type", "radio");
  inputRadio1.setAttribute("id", "radio-work");
  inputRadio1.setAttribute("name", "category");
  inputRadio1.setAttribute("value", "work");
  inputRadio1.setAttribute("checked", "true");

  const label1 = document.createElement("label");
  label1.setAttribute("for", "radio-work");
  label1.textContent = "Work";

  workDiv.appendChild(inputRadio1);
  workDiv.appendChild(label1);

  //LIFE DIV
  const lifeDiv = document.createElement("div");
  lifeDiv.setAttribute("id", "div-life");

  const inputRadio2 = document.createElement("input");
  inputRadio2.setAttribute("type", "radio");
  inputRadio2.setAttribute("id", "radio-life");
  inputRadio2.setAttribute("name", "category");
  inputRadio2.setAttribute("value", "life");

  const label2 = document.createElement("label");
  label2.setAttribute("for", "radio-life");
  label2.textContent = "Life";

  lifeDiv.appendChild(inputRadio2);
  lifeDiv.appendChild(label2);

  //SPORT DIV
  const sportDiv = document.createElement("div");
  sportDiv.setAttribute("id", "div-sport");

  const inputRadio3 = document.createElement("input");
  inputRadio3.setAttribute("type", "radio");
  inputRadio3.setAttribute("id", "radio-sport");
  inputRadio3.setAttribute("name", "category");
  inputRadio3.setAttribute("value", "sport");

  const label3 = document.createElement("label");
  label3.setAttribute("for", "radio-sport");
  label3.textContent = "Sport";

  sportDiv.appendChild(inputRadio3);
  sportDiv.appendChild(label3);

  //Education DIV
  const educationDiv = document.createElement("div");
  educationDiv.setAttribute("id", "div-education");

  const inputRadio4 = document.createElement("input");
  inputRadio4.setAttribute("type", "radio");
  inputRadio4.setAttribute("id", "radio-education");
  inputRadio4.setAttribute("name", "category");
  inputRadio4.setAttribute("value", "education");

  const label4 = document.createElement("label");
  label4.setAttribute("for", "radio-education");
  label4.textContent = "Education";

  educationDiv.appendChild(inputRadio4);
  educationDiv.appendChild(label4);

  //button
  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.setAttribute("class", "todo-form-submit-button");
  button.textContent = "Add todo";

  fieldset.appendChild(legend);
  fieldset.appendChild(workDiv);
  fieldset.appendChild(lifeDiv);
  fieldset.appendChild(sportDiv);
  fieldset.appendChild(educationDiv);

  form.appendChild(input);
  form.appendChild(fieldset);
  form.appendChild(button);

  return form;
};
