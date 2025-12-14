
let p= new Promise((res,rej)=>{
   res(2);
})

p.then((data)=>{
    return 2*data;
}).then((data)=>{
    return 2*data;
}).then((data)=>{
    console.log(data);
})
.catch(()=>{
    console.log("Reject")
})