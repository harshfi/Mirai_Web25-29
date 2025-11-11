
function fun(){
    
    let cnt =0;

    function counter(){
        cnt++;
        console.log(cnt);
    }

    return counter;
    
}


let counter1 = fun();
counter1()
counter1()
counter1()

