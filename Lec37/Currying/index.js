
function sum(num){
    if(!num){
        return 0;
    }

    return function helper(v){
        if(!v){
            return num;}

            num=num+v;

            return helper
    }
}



console.log(sum());

console.log(sum(1)());

console.log(sum(1)(2)());

console.log(sum(1)(2)(3)());

console.log(sum(1)(2)(3)(4)());
