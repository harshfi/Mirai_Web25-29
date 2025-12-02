
const email=document.getElementById('Email');
const password=document.getElementById('Password');
const btn=document.querySelector('button');


let EnteredEmail="";

email.addEventListener('change',(e)=>{
    EnteredEmail=e.target.value;
})

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(EnteredEmail.includes('@') && EnteredEmail.includes('.')){
        alert("Form Submitted Successfully")
    }
    else{
        // alert("Please enter a valid email")
        const h3=document.createElement('h3');
        h3.innerText="Please enter a valid email";
        h3.style.color="red";
        document.querySelector('body').appendChild(h3);
    }
})


