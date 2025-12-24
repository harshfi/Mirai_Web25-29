//-> promise based approach
// let promise = fetch('https://jsonplaceholder.typicode.com/users')


// promise.then((data)=>{
//     return data.json();
// }).then((data)=>{
//     console.log(data);
// })


//async await
let card=document.querySelector('.card');
async function fetchData() {
    let data=await fetch('https://jsonplaceholder.typicode.com/users');
     
    data= await data.json();
    for(let user of data){
        let h4=document.createElement('h4');
        let h6=document.createElement('h6');
        let p=document.createElement('p');
        let br=document.createElement('hr');

        h4.innerText=user.name;
        h6.innerText=user.email;
        p.innerText=user.phone;
        
        card.appendChild(h4)
        card.appendChild(h6)
        card.appendChild(p)
        card.appendChild(br)

        


    }
}




fetchData()

