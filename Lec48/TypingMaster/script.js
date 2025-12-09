let arr=["function", "variable", "constant", "callback", "promise", "async", "await", 
 "react", "redux", "component", "context", "eventloop", "algorithm", "database", 
 "frontend", "backend", "compiler", "debugger", "runtime", "network"]

let currentLetter='';
let currentWord='';

let sec=21;
let timer=document.querySelector('.timer');

 let body=document.querySelector('body');

let word=document.querySelector(".words");
let screen=document.querySelector(".screen");

let correct=0;
function getRandomWord(){
    let randomIndex=Math.floor(Math.random()*arr.length);
    return arr[(randomIndex)];
}

function genrateWord(){
    let word=getRandomWord();
    // console.log(word)
    let breakWord=word.split("").map((letter)=>{
        return `<span>${letter}</span>`
    }).join("");


   return(breakWord);


}

function putSentance(){
    let spans=genrateWord();
    word.insertAdjacentHTML('beforeend',`<span>${spans}</span> `)

    if(currentWord===''){
        currentWord=word.children[0];
        // console.log(word);
        currentLetter=currentWord.firstElementChild;
        console.log("current",currentWord.innerText,currentLetter.innerText);
    }
}

for(let i=0;i<30;i++){
    putSentance();
}

body.addEventListener('keydown',(e)=>{
    console.log(e.key)
   
    if(sec===21)start();

    if(e.key===currentLetter.innerText){
        currentLetter.style.color="white";
        currentLetter=currentLetter.nextElementSibling;
        console.log(currentLetter);
        correct++;
        if(currentLetter===null)anotherWord();
    }
    else{
        currentLetter.style.color="red";
        currentLetter=currentLetter.nextElementSibling;
        console.log(currentLetter);
         if(currentLetter===null)anotherWord();
    }
})

function anotherWord(){
    currentWord=currentWord.nextElementSibling;

    currentLetter=currentWord.firstElementChild;
}


function start(){
    sec--;
    let id= setInterval(()=>{
        timer.innerText=sec;
        if(sec===0){
            screen.style.display="block"
            document.querySelector('h2').innerText=`your speed is ${correct/5}`
            clearInterval(id);
        }
        sec--;
    },1000);
    console.log(id);
}