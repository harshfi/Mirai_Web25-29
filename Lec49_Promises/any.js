
let p1=new Promise((res,rej)=>{

    setTimeout(()=>{
        let data=[1,5,8,-3,5];
        data.sort((a,b)=>a-b);
        res(data);
    },3000)
})

let p2= new Promise((res,rej)=>{
    setTimeout(()=>{
        let data=[8,2,11,16];
        data.sort((a,b)=>a-b);
        res(data);
    },1000)
})

Promise.any([p1,p2]).then((data1)=>{
    console.log("Any of the 2 promises runnan promises have been excuted",data1);
     
  
})
