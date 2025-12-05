
//scan->verfy your password-> money has been sent -> money received -> success message

function scan(cb){
    console.log("scanning UPI code...");
    setTimeout(()=>{
       cb("1234",sendMoney);
    },2000);
   
}

function verifyPassword(password,cb){
    console.log("verifying your password...");
    if(password==="1234"){
        setTimeout(()=>{
       cb(moneyReceived)
    },2000);
        
    }
    else{
        console.log("Incorrect Password");
    }
}

function sendMoney(cb){
    console.log("Money has been sent...");
    
        setTimeout(()=>{
       cb(successMessage);
    },2000);
        
    
}

function moneyReceived(cb){
    console.log("Money received by the recipient...");
     setTimeout(()=>{
        cb()
    },2000);
    
}

function successMessage(){
    console.log("Transaction Successful!");
}

scan(verifyPassword);
