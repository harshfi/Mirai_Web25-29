
//cpp
// for(int i=0;i<5;i++){

// }

for(let i=0;i<5;i++){
    console.log(i);
}


const n=35;

let check=true;

for(let i=2;i<=n-1;i++){
    if(n%i==0){ //=== js check value as well as data type
      check=false;
      break;
    }
}

console.log(check?"Prime":"Not a prime")




// while loop


let i=1;

while(i<=10){
  // console.log("2 *"+i+" = "+ 2*i);

  console.log(`2 * ${i} = ${2*i}`) // in this we can write variables as well as our string 
  i++;
}


var name ="harsh"
var name1='babul'

// ``//backtec

i=8;
do{
console.log(i);
}while(i<=7)





