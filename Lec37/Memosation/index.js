

function prime(num){
    let temp=0;

    for(let i=2;i<num;i++){
        if(num%i==0){
            return "not prime";
        }
    }
    return "prime";
}


function find(fn){
   
    let cache=[];
    return  (v)=>{
         if((cache[v])){

            console.log("this kjgjgjgyg")
            return cache[v]
         }

         console.log(cache)
          
         let val=fn(v);
         cache[v]=val;
         return val
    }
}


let findPrime= find(prime);

console.log(findPrime(9));
console.log(findPrime(9));