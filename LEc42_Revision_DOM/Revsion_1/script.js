
let headingAll= document.getElementsByClassName("heading");

console.log(headingAll);

const list= document.getElementById("list");


console.log(list);


const firstHeading= document.querySelector(".heading");

console.log("First matched heading",firstHeading);

firstHeading.innerText="hi my name is piyush tripathi"


const para= document.querySelector("p");

let h3= document.createElement("h3");

h3.innerText="hi h3 is created using js";

console.log(h3)

let body= document.querySelector("body");

body.appendChild(h3);