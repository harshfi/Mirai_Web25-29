
let para=document.querySelector("body");

console.log(para)

para.addEventListener("keydown",function(event){

    console.log("Key down event",event);
  
})

para.addEventListener("keyup",function(event){
 console.log("Key up event",event);
})