
const addButton=document.getElementById("add");
let names=document.getElementById("task");
const deleteButtons=document.getElementById("deleteButton")
const enterInput=document.getElementById("name");
const display=document.getElementById("root");
const markup=document.createElement("div");

function Task(){
this.taskId=uuidv4();
this.description=task.value;
this.createdOn=Date();

}

const myarray=[];

const myTask=()=>{
const tasks=new Task();
myarray.push(tasks);
Domcreate(tasks);
console.log(myarray);
event.preventDefault();

}

const deleteTasks=(taskId)=>{
    console.log("hiii");
}





addButton.addEventListener('click',myTask);
deleteButtons.addEventListener('click',event=>{
    deleteTasks(task.taskId);
});


const Domcreate=(tasks)=>{
    const markup=document.createElement("div");
// const markup=document.createElement("div");
markup.classList.add("taskdiv");
markup.id=`${tasks.taskId}`;

const inputs=document.createElement("para");
inputs.id="name";
inputs.textContent=`${tasks.description}`;
// inputs.value=`${tasks.description}`;
// inputs.disabled=true;

const para2 =document.createElement("para");
para2.classList.add("dates");
para2.textContent=`${tasks.createdOn}`;

// const edit=document.createElement("button");
// edit.id="editButton";
// edit.textContent="edit";
// edit.addEventListener('click',edittext);
// event.preventDefault();

const deletes=document.createElement("button");
deletes.id="deleteButton";
deletes.textContent="delete";
deletes.addEventListener('click',Delete);

markup.appendChild(inputs);
markup.appendChild(para2);
markup.appendChild(deletes);
display.appendChild(markup)
return markup
}


