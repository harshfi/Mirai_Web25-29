
// let movies=["animal","OG","Gang of Wassupur","Damaal","Hera phire"]

let ul=document.querySelector('ul')

console.log(ul);

// for(let i=1;i<10000;i++){
//  ul.innerHTML+=`<li>${i}</li> `
// }

for(let i=1;i<10000;i++){
    let li=document.createElement("li");
    li.innerText=i;
    ul.prepend(li);
}