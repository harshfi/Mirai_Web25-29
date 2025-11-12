

function CreateConter(){


    let cnt=0;
    function counter(){
        cnt++
        console.log(cnt);
    }

    return counter;
}

let counter1= CreateConter();

let counter2= CreateConter();


counter1();
counter1();
counter1();
counter1();


counter2();
counter2();
counter2();
counter2();

