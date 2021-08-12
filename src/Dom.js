let taskArray = [];
const addButton = document.getElementById("add");
const display = document.getElementById("root");
let count = 0;

window.onload = function () {
  firstArray = JSON.parse(localStorage.getItem("task"));
  if (firstArray != null) {
    firstArray.forEach((item) => {
      displayOnDOM(createDOM(item));
    });
    taskArray = [...firstArray];
    firstArray = [];
  }
  return;
};
const displayOnDOM = (Container) => {
  display.appendChild(Container);
};

function Task(description) {
  this.taskId = uuidv4();
  this.description = description;
  this.createdOn = Date();
}

const completedTodo = (e) => {
  const todoId = e.target.parentElement.id;
  let index = taskArray.findIndex((item) => item.taskId === todoId);
  taskArray[index].isCompleted = true;
  localStorage.setItem("task", JSON.stringify(taskArray));
  const completedtasks = document.getElementById(todoId);
  let canceltask = completedtasks.childNodes[2];
  canceltask.style = "text-decoration: line-through";
};

const addTask = (tasks1) => {
  event.preventDefault();
  const task = new Task(task1.tasks.value);
  taskArray.push(task);
  display.appendChild(createDOM(task));
  localStorage.setItem("task", JSON.stringify(taskArray));
  document.getElementById(task).value = " ";
};

const deleteTasks = (e) => {
  const paren = e.target.parentElement.id;
  taskArray.splice(paren, 1);
  const parenDom = document.getElementById(paren);
  parenDom.remove();
  localStorage.setItem("task", JSON.stringify(taskArray));
};

const editTasks = (e) => {
  const pare = e.target.parentElement.children[2].textContent;
  document.getElementById("task").value = pare;
};

const doneTasks = (e, x) => {
  x = document.getElementById("task").value;
  let res2 = e.target.parentElement.children[2].textContent;
  res2 = x;
  let result = (e.target.parentElement.children[2].textContent = `${res2}`);
  result = e;
  localStorage.setItem("task", JSON.stringify(taskArray));
};

const createDOM = (task) => {
  const markup = document.createElement("div");
  markup.id = `${task.taskId}`;

  const btn2 = document.createElement("button");
  btn2.classList.add("btn", "btn-complete");
  const i2 = document.createElement("i");
  btn2.classList.add("far", "fa-check-circle");
  btn2.appendChild(i2);
  markup.appendChild(btn2);
  btn2.setAttribute("onclick", `completedTodo(event)`);

  const para1 = document.createElement("para");
  for (let i = 0; i <= taskArray.length; i++) {
    count = 0 + taskArray.length;
  }
  para1.textContent = `${count}`;

  const para2 = document.createElement("para");
  para2.textContent = `     ${task.description}`;

  const para3 = document.createElement("p");
  para3.textContent = `${task.createdOn}`;

  const deletebutton = document.createElement("button");
  deletebutton.setAttribute("onclick", "deleteTasks(event)");
  deletebutton.textContent = "DELETE";

  const editbutton = document.createElement("button");
  editbutton.setAttribute("onclick", "editTasks(event)");
  editbutton.textContent = "EDIT";

  const donebutton = document.createElement("button");
  donebutton.setAttribute("onclick", "doneTasks(event)");
  donebutton.textContent = "DONE EDIT";

  markup.appendChild(para1);
  markup.appendChild(para2);
  markup.appendChild(para3);
  markup.appendChild(deletebutton);
  markup.appendChild(editbutton);
  markup.appendChild(donebutton);

  return markup;
};

addButton.addEventListener("click", addTask);
