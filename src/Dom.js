let taskArray=[];
const addButton=document.getElementById("add");
const display=document.getElementById("root");
let count=0;


window.onload = function() {
    firstArray = JSON.parse(localStorage.getItem('task'));
    if(firstArray != null){
        firstArray.forEach((item) => {
            displayOnDOM(createDOM(item));
        });
        taskArray = [...firstArray];
        firstArray = [];
    }
    return ;
  };
  const displayOnDOM = (Container) => {
    display.appendChild(Container);
}

function Task(description){
    this.taskId=uuidv4();
    this.description=description;
    this.createdOn=Date();

}

const addTask=(tasks1)=>{
//   document.getElementById(task).value=" ";
    event.preventDefault();
    const task =new Task(task1.tasks.value);
    taskArray.push(task);
    display.appendChild(createDOM(task));
    // console.log(taskArray);
    localStorage.setItem('task', JSON.stringify(taskArray));
    document.getElementById(task).value=' ';
}
const deleteTasks=(e)=>{
    const paren= e.target.parentElement.id;
    taskArray.splice(paren,1);

    const parenDom=document.getElementById(paren);
    parenDom.remove();

    localStorage.setItem('task', JSON.stringify(taskArray));


}
const editTasks=(e)=>{
   const pare=e.target.parentElement.children[1].textContent;
    document.getElementById("task").value=pare;
    // localStorage.setItem('task', JSON.stringify(taskArray));
    // console.log(x);
    // return x;
//    console.log(pare);
}
const doneTasks=(e,x)=>{
    // console.log(typeof(x));
    x=document.getElementById("task").value;
    let res2=e.target.parentElement.children[1].textContent;
    // res2=res2+x;
    res2=x;

    // let res3=res2;
    let result=e.target.parentElement.children[1].textContent=`${res2}`;
    result=e;
    localStorage.setItem('task', JSON.stringify(taskArray));
    // taskArray.push(e);
    // console.log(result);


}

const createDOM=(task)=>{
    const markup=document.createElement("div");
    markup.id=`${task.taskId}`; 
    // const icon=document.createElement("img");
    // icon.src="./images/tick.jpg";
    // icon.id="iconid";
    // icon.setAttribute("onclick","doneTodo(task.taskId)");
    // let brs=document.createElement("br");
    const para1=document.createElement("para");
    for(let i=0;i<=taskArray.length;i++){
        count=0+taskArray.length;
       
    }
    para1.textContent=`${count}`;
    // let brs1=document.createElement("br");
    const para2=document.createElement("para");
    para2.textContent=`     ${task.description}`;
    const para3=document.createElement("p");
    para3.textContent=`${task.createdOn}`;
    const deletebutton=document.createElement("button");
    deletebutton.setAttribute("onclick","deleteTasks(event)");
    deletebutton.textContent="DELETE";
    const editbutton=document.createElement("button");
    editbutton.setAttribute("onclick","editTasks(event)");
    editbutton.textContent="EDIT";
    const donebutton=document.createElement("button");
    donebutton.setAttribute("onclick","doneTasks(event)");
    donebutton.textContent="DONE EDIT";

  
    markup.appendChild(para1);
    // markup.appendChild(brs);
    markup.appendChild(para2);
    // markup.appendChild(brs1);
    markup.appendChild(para3);
    markup.appendChild(deletebutton);
    markup.appendChild(editbutton);
    markup.appendChild(donebutton);
   
    return markup;
}

addButton.addEventListener('click',addTask);

