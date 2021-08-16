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
  this.isCompleted = false;
  console.log(this.taskId);
}

const addTask = (tasks1) => {
  event.preventDefault();
  const task = new Task(task1.tasks.value);
  taskArray.push(task);
  display.appendChild(createDOM(task));
  console.log(taskArray);
  localStorage.setItem("task", JSON.stringify(taskArray));
};

const completedTodo = (e) => {
  const todoId = e.target.parentElement.id;
  let index = taskArray.findIndex((item) => item.taskId === todoId);
  taskArray[index].isCompleted = true;
  localStorage.setItem("task", JSON.stringify(taskArray));
  const completedtasks = document.getElementById(todoId);
  let canceltask = completedtasks.childNodes[2];
  canceltask.style = "text-decoration: line-through";
  localStorage.setItem("task", JSON.stringify(taskArray));
  let editTask = e.target.parentElement.childNodes[5];
  let doneTask = e.target.parentElement.childNodes[6];
  editTask.style.display="none";
  doneTask.style.display="none";


  

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
  document.querySelector("#task").value = "";
  const markup = document.createElement("li");
  markup.id = `${task.taskId}`;

  const btn2 = document.createElement("button");
  btn2.classList.add("btn", "btn-complete");
  const i2 = document.createElement("i");
  btn2.classList.add("fa", "fa-lg", "fa-check-double");
  btn2.appendChild(i2);
  markup.appendChild(btn2);
  btn2.setAttribute("onclick", `completedTodo(event)`);

  const para1 = document.createElement("para");
  for (let i = 0; i <= taskArray.length; i++) {
    count = 0 + taskArray.length;
  }

  const para2 = document.createElement("para");
  para2.textContent = `     ${task.description}`;
  const para3 = document.createElement("p");

  para3.textContent = `${task.createdOn}`;

  const delBtn = document.createElement("i");
  delBtn.classList.add("fas");
  delBtn.classList.add("fa-minus-circle", "fa-2x");
  delBtn.setAttribute("onclick", "deleteTasks(event)");

  const editbutton = document.createElement("i");
  editbutton.classList.add("fas");
  editbutton.classList.add("fa-edit", "fa-2x");
  editbutton.setAttribute("onclick", "editTasks(event)");

  const donebutton = document.createElement("i");
  donebutton.classList.add("fas");
  donebutton.classList.add("fa-thumbs-up", "fa-2x");
  donebutton.setAttribute("onclick", "doneTasks(event)");
  if(task.isCompleted)
  {
  console.log("listfield.isComplete");
  
  editbutton.style.display="none";
  donebutton.style.display="none";
  para2.style = "text-decoration: line-through";
  }

  markup.appendChild(para1);
  markup.appendChild(para2);
  markup.appendChild(para3);
  markup.appendChild(delBtn);
  markup.appendChild(editbutton);
  markup.appendChild(donebutton);

  return markup;
};

addButton.addEventListener("click", addTask);
