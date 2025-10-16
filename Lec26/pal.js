
let arr=[1,2,3,3,2,1];


let check=true;


while(arr.length>1){
    let v1=arr.pop();
    let v2=arr.shift();
    if(v1!==v2){
        check=false;
        break;
    }
}

console.log(check?"Palendrome":"vo nahi hain")
