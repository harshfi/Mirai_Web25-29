let ul=document.querySelector('ul');
let meraCard=document.querySelector('.meraCard');
//fetch

let p=fetch('https://dummyjson.com/quotes')

p
.then((data)=>{

    console.log(data);
    return data.json();
}).then((data)=>{
    console.log(data.quotes);
//<div class="card-body">
//     <h5 class="card-title">Special title treatment</h5>
//     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
    for(let q of data.quotes){
        console.log(q.quote);
        add(q)
      

    }
})

function add(q){
     let div=document.createElement('div');
        let h5=document.createElement('h5');
        let p=document.createElement('p');
        let a=document.createElement('a')
        h5.innerText=q.id;
        p.innerText=q.quote;
        a.innerText=q.author;

        h5.classList.add('card-title')
        p.classList.add('card-text')
        a.classList.add('btn-primary')
        a.classList.add('btn');
        div.classList.add('card-body')


        div.appendChild(h5);
        div.appendChild(p);
        div.appendChild(a);

        meraCard.appendChild(div);
}