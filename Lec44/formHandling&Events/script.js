
const email=document.getElementById('Email');
const password=document.getElementById('Password');
const btn=document.querySelector('button');


console.log(email);

email.addEventListener('input',(e)=>{
    console.log("Email changed",e.target.value);
})

password.addEventListener('input',(e)=>{
    
    console.log("Password changed",e);


})

btn.addEventListener('click',(e)=>{
 e.preventDefault();
    console.log("Form Submitted");
})
