
let hi=document.querySelector(".hi");

console.log(hi);

// hi.onclick=()=>{

//     console.log("why pressing me")
// }
function clicking(){
    // console.log("why pressing me")

    hi.innerText="my name is harsh tripathi"
}


hi.addEventListener("click",clicking)


hi.addEventListener("mouseover",()=>{
    console.log("mouse is over me")
})




