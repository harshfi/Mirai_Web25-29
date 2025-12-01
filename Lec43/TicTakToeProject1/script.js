let body=document.querySelector("body");

let btn=document.querySelector(".btn");
console.log(btn)
btn.addEventListener("click",()=>{
    console.log("clicked")
    body.classList.toggle("dark")
})
let arr= new Array(9).fill(null);


const wins = [
  [0,1,2], // top row
  [3,4,5], // middle row
  [6,7,8], // bottom row
  [0,3,6], // left col
  [1,4,7], // middle col
  [2,5,8], // right col
  [0,4,8], // diagonal
  [2,4,6]  // other diagonal
              ];


let chance=0;//even-x odd-o


let boxes=document.querySelectorAll(".box");
let player=document.querySelector(".player");

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box clickeed",box.id);

        let id=box.id;
        arr[id]= chance%2===0?"X":"O"
          box.innerText=arr[id];
          box.style.backgroundColor= chance%2===0?"#f44336":"#2196f3";
            player.innerText= chance%2===0?"O's Turn":"X's Turn";
          if(checkwin()){
            alert(`${arr[id]} has won the game`)
           
          }

        chance++;

        if(chance===9){
            alert("Game Draw")
            reset();
        }
    })
})


function checkwin(){

    for(let [a,b,c] of wins){
        if(arr[a]!=null && arr[a]===arr[b] && arr[b]===arr[c]){
            return true;
        }
    }
    return false;
}

function reset(){
    arr.fill(null);
    chance=0;
    boxes.forEach((box)=>{
        box.innerText="";
    })
}