
let ul=document.querySelector('ul');

let q= fetch("https://dummyjson.com/quotes")



function addData(data){
    console.log(data.quotes);
    for(let d of data.quotes){

        let li=document.createElement('li');

       li.innerText=(d.quote);

       ul.appendChild(li);
    }
}

q.then((data)=>{

    return data.json();
})
.then((data)=>{
    addData(data)
})
