

function CreateConter(){


    let cnt=0;
    function counter(){
        cnt++
        console.log(cnt);
    }

    return counter;
}

let counter1= CreateConter();

counter1();
counter1();
counter1();