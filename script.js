let inputext = document.querySelector(".textinput");
let addtaskbutton = document.querySelector(".addTask");
let todos = document.querySelector(".todoapp");

const toggleComplete = (Event) => {
  const { parentElement } = Event.currentTarget;

  const isCompleted = [...parentElement.classList].some(
    (className) => className === "completed"
  );
  if (!isCompleted) {
    Event.currentTarget.innerText = "Not Complete";
  } else {
    Event.currentTarget.innerText = "Complete";
  }
  Event.currentTarget.parentElement.classList.toggle("completed");
};

const removeItem = (Event) => {
  todos.removeChild(Event.currentTarget.parentElement);
};

const renderTodoItem = (todotext) => {
  const todoItemLi = document.createElement("li");
  todoItemLi.classList.add("todoItem");

  const completebttn = document.createElement("button");
  completebttn.classList.add("completebttn");
  completebttn.innerText = "Complete";
  completebttn.addEventListener("click", toggleComplete);
  todoItemLi.appendChild(completebttn);

  const deletebttn = document.createElement("button");
  deletebttn.classList.add("deletebttn");
  deletebttn.innerText = "Delete";
  deletebttn.addEventListener("click", removeItem);
  todoItemLi.appendChild(deletebttn);

  const textElement = document.createElement("p");
  textElement.innerText = todotext;
  textElement.classList.add("todotext");
  todoItemLi.appendChild(textElement);

  todos.appendChild(todoItemLi);
  inputext.value = "";
  inputext.focus();
};
let addtask = () => {
  if (inputext.value === "") {
    alert("Hiçbir şey girmediniz");
  } else {
    renderTodoItem(inputext.value);
  }
};
addtaskbutton.addEventListener("click", addtask);
