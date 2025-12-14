let p= new Promise((res,rej)=>{
    let scan =true;
    setTimeout(()=>{
      if(scan==true)res("i have scanned the scanner",1234);
     else rej ("Could not able to sacn")
    })
    
})

p.then((msg,pass)=>{
    console.log(msg);
   return new Promise((res,rej)=>{
    console.log("harsh",pass)
      if(1234===1234){
       res();
    }
    else rej()
   })
    
})
.then(()=>{
    console.log("money has been debited");
    return new Promise((res,rej)=>{
        let received=true;
        if(received==true)res();
        else rej();
    })
})
.then(()=>{
    console.log("Money has been recived")

    return "Payment has been done!"
})
.then((data)=>{
    console.log(data)
})
.catch(()=>{
    console.log("payment incomplete")
})