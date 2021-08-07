const addbutton=document.getElementById("todo");
let show=document.getElementById("display");
const mytodo=()=>{
    show+=document.getElementById(myinput.value);
    return show;
}
addbutton.addEventListener('click',mytodo)