
let input=document.getElementById("input");
let addBtn=document.getElementById("addTaskBtn");
let ul=document.querySelector("ul");

let task="";

let id=0;




ul.addEventListener("click",(e)=>{
    let target=(e.target);
    let li=target.parentElement;

    if(target.innerText=="🗑"){
        ul.removeChild(li);
    }

    else if(target.innerText=="⬆"){
        let prev=li.previousElementSibling;
        if(prev){
            ul.insertBefore(li,prev);
        }
    }

    else if(target.innerText=="⬇"){
        let next=li.nextElementSibling;

        if(next){
            ul.insertBefore(next,li);
        }
    }

   //homework edit -complete

    else if(target.innerText=="✏️"){
        document.querySelector(".editbox").style.display="block";
        let editInput=document.getElementById("editInput");
        editInput.value=li.innerText.slice(0,-6);
        let saveBtn=document.getElementById("saveBtn");
        saveBtn.addEventListener("click",()=>{
            li.innerText=editInput.value;
            document.querySelector(".editbox").style.display="none";
            addBtns(li);
        }
    )

    }

})

input.addEventListener("change",(e)=>{
    task=e.target.value;
    // task=input.value;
    console.log(task);
})

addBtn.addEventListener("click",()=>{

    task=task.trim();
    if(task!=""){
        addTask(task);
        input.value="";
        task="";
    }
})



function addTask(task){
    let li=document.createElement("li");
    li.innerText=task;

    li.id= id;
    id++;
    addBtns(li);
   

    ul.appendChild(li);
}

function addBtns(li){
  let deleteBtn=document.createElement("button");
    deleteBtn.innerText="🗑"
    let increaseBtn=document.createElement("button");
    increaseBtn.innerText="⬆"
    let decreseBtn=document.createElement("button");
    decreseBtn.innerText="⬇"
    let updateBtn=document.createElement("button");
    updateBtn.innerText="✏️"


    li.appendChild(deleteBtn);
    li.appendChild(increaseBtn);
    li.appendChild(decreseBtn);
    li.appendChild(updateBtn);
}




