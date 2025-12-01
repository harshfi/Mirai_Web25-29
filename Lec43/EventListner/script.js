const h1=document.querySelector(".heading");


function changeColor(){
    h1.style.color="red";
    alert("You clicked the heading");
}

// h1.addEventListener("click",changeColor)

// h1.addEventListener("dblclick", function(){
//     h1.classList.toggle("down");
// })

// h1.addEventListener("mouseover", function(){
//     h1.classList.toggle("down");
// })

h1.addEventListener("mouseout", ()=>{
h1.innerText="You moved the mouse out";
})
h1.addEventListener("mouseout", ()=>{
console.log("You moved the mouse out")
h1.style.color="blue";
})