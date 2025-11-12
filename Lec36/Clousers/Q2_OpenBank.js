

function openBankAccount(initialBalance) {
    let balance = initialBalance;
    
    function deposit(amount){
        balance += amount;
        console.log(`Deposited: $${amount}. New Balance: $${balance}`);
    }
    function withdraw(amount){
        if(amount <= balance){
            balance -= amount;
            console.log(`Withdrew: $${amount}. New Balance: $${balance}`);
        }
        else{
            console.log(`Insufficient funds. Current Balance: $${balance}`);
        }
    }
    function getBalance(){
        console.log(`Current Balance: $${balance}`);
    }

    return {
        deposit,
        withdraw,
        getBalance
    }

}


let myAccount = openBankAccount(1000);

myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.getBalance();
myAccount.withdraw(2000);

console.log(myAccount.balance)
