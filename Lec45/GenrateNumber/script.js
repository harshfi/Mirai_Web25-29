


const body=document.querySelector("body");



let input=document.querySelector("#numinput");
 
let btn=document.querySelector("#btn");

let usernum;

input.addEventListener("change",(e)=>{
     usernum=(e.target.value);
})

btn.addEventListener("click",()=>{


    let genRandomNum= Math.random();
    genRandomNum= Math.floor((genRandomNum*10)+1);

    reset();

     let h3=document.createElement("h3");
     h3.id="result";

  if(usernum==genRandomNum){
    h3.innerText=("Congratulations! You guessed the correct number: " + genRandomNum);
    h3.style.color="green";
    body.appendChild(h3);
  }
  else{
     h3.innerText=("best of luck next time! The correct number was: "+ genRandomNum);
     h3.style.color="red";
    body.appendChild(h3);
  }
})

function reset(){
    document.querySelector("#result")?.remove();
}