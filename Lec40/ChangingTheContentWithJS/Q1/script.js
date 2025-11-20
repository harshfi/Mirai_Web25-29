
let movies=["animal","OG","Gang of Wassupur","Damaal","Hera phire"]

let ul=document.querySelector('ul')

console.log(ul);

for(let movie of movies){

    ul.innerHTML+=`<li>${movie}</li>`
}