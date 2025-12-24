

let p=fetch('https://jsonplaceholder.typicode.com/todos');


p.then((data)=>{
    return (data.json());
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);

})
.finally(()=>{
    console.log("excution ended")
})