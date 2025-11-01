
//number data type
let x=Number.MAX_SAFE_INTEGER;

console.log(x);

console.log(x+1===x+2, x+2,x+1)
 
//011->3
//used to represent binary numbers
let y=0b0111;

console.log(y)

//hexadecimal

let a=0xff;
console.log(a);


let b=Number("123");

let c="123"+3;
let d=b+3;

console.log(c,d);
console.log(typeof(b))


//boolean data type

let num=-5;
console.log(Boolean(num))

console.log(Boolean(0));


console.log(Number(true),Number(false))


let m=1/0;
console.log(m); //infinity

console.log(typeof(m),Boolean(m))

