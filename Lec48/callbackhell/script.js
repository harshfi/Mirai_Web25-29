
function scan(callback){
    console.log("scanning UPI code...");
   callback("1234");
}





scan((verifyPassword)=>{

    if(verifyPassword==="1234"){
        function sendMoney(){
        console.log("Money has been sent...");
         setTimeout(()=>{
            function moneyReceived(){
                console.log("money has been sent")
                function successMessage(){
                    console.log("Transaction Successful!");
                }
                successMessage();
            }
            moneyReceived();
         })
        }
        sendMoney();
    }
})