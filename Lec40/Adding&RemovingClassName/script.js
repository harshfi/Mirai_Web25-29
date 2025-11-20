
let box=document.querySelector('div')

// box.classList.add('box');

box.classList.add('box1');


setInterval(()=>{
box.classList.toggle('box1');
box.classList.toggle('box')
},1000)