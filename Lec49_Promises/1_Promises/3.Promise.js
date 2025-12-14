let p=new Promise((res,rej)=>{
    console.log("Promise callback function has been started");

    let flag=true;

    setTimeout(()=>{
    if(flag){
        console.log("My resolve is going to be excuted")
        res();
    }
    else{
        console.log("My reject is been going to be excuted")
       rej()
    } 
    },2000)
   
}).then(()=>{

    console.log("mera then wala function will is excuteing chal gaya ")
})
.catch(()=>{
    console.log("Reject function is been excuted")
})
;





