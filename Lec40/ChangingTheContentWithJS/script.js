
let heading=document.querySelector("h1")

console.log(heading);

// heading.innerText="Hi Boss"

console.log(heading.innerText)


heading.innerText=heading.innerText+" Kumar"; //hi akash kumar


let nameis=document.getElementById("name");

let myName="Harsh tripathi"
console.log(nameis);

// nameis.innerText=nameis.innerText+" Harsh Tripathi"

nameis.innerHTML+= `<b><i> ${myName} </i></b>`

