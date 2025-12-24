
let input=document.querySelector('input');
let button=document.querySelector('button');
let body= document.querySelector('.box');


let id='';

input.addEventListener('change',(e)=>{
    id=e.target.value;
})

button.addEventListener('click',()=>{
    let p= fetch('https://api.github.com/users/'+id)

    p.then((data)=>{
        return data.json();
    })
    .then ((data)=>{
       console.log(data);
        addCard(data);
    })
})


function addCard(data){
//     <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>

//outerDiv

let outerdiv=document.createElement('div');
let img=document.createElement('img');
let innerDiv=document.createElement('div');
let h5=document.createElement('h5');
let p=document.createElement('p');
let a=document.createElement('a')
        h5.innerText=data.name;
        p.innerText=data.bio;
        a.innerText=`Followers: ${data.followers}`;

        h5.classList.add('card-title')
        p.classList.add('card-text')
        a.classList.add('btn-primary')
        a.classList.add('btn');
        innerDiv.classList.add('card-body')
        img.src=data.avatar_url
        img.classList.add('card-img-top');
        outerdiv.classList.add('card');
        outerdiv.style.width='18rem';
        innerDiv.appendChild(h5);
        innerDiv.appendChild(p);
        innerDiv.appendChild(a);
        outerdiv.appendChild(img);
        outerdiv.appendChild(innerDiv);
       
        body.appendChild(outerdiv);

}

