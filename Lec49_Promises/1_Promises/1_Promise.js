let p=new Promise(fun1);

function fun1(res,rej){

    let flag=false;
    if(flag)res();
    else rej()
}

p.then(()=>{
    console.log("mera then wala chiz chal gaya ")
})
.catch(()=>{
    console.log("Reject function is been excuted")
})

