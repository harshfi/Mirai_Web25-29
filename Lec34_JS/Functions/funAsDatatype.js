
function hello(){
    console.log("Hello World");
}

function greet(fn){
    console.log("Inside greet function")
    console.log("Calling the passed function now:")
    fn();
    console.log("Returned from the passed function")
}


greet(hello)



// storing the function in a variable


let sayHi= function say(){
    console.log("Hi there!");
}

sayHi();

function caller(){
    console.log("Inside caller function")
}

let fnVar=caller;
fnVar();


let add= function (a,b){ // anonymous function
    return a+b;
}

console.log(add(5,10))