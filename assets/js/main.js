window.addEventListener("load", () => {
  let form = document.querySelector(".form");
  let userInput = document.querySelector("#userInput");
  let activitiesContainer = document.querySelector(".activities-container");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let userTodo = userInput.value;
    if (!userTodo) {
      alert("value can not be empty");
      return;
    }

    let activitiesTodo = document.createElement("div");
    activitiesTodo.classList.add("activitiesTodo");
    let todoInput = document.createElement("input");
    todoInput.classList.add("input");
    todoInput.type = "text";
    todoInput.readOnly = true //make it ineditabe

    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("edit-btn");
    editBtn.type = "submit";

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("del-btn");
    delBtn.type = "submit";
    // appending offsprings
    activitiesContainer.appendChild(activitiesTodo);
    activitiesTodo.appendChild(todoInput);
    activitiesTodo.appendChild(editBtn);
    activitiesTodo.appendChild(delBtn);
    // print to do new task
    todoInput.value = userTodo;
    userInput.value = "";

    //  I added these codes for Experiments and practice
   
    // this will delete a todo item
    delBtn.addEventListener("click", () => {
      activitiesTodo.remove();
    });

    // this will edit/save a todp item

    editBtn.addEventListener("click", () => {
      if (editBtn.innerText == "Edit") {
        todoInput.readOnly = false;
        editBtn.innerText = "Save";
        editBtn.style.backgroundColor = "green";
       
      } else {
        todoInput.readOnly = true;
        editBtn.innerText = "Edit";
        editBtn.style.backgroundColor = "#000";
        
      }
    });

    // the edith eventlistener stops here
  });
});
