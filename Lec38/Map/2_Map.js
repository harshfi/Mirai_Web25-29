
let arr=[3,5,9,-1];

//even index ko increase by 4 and odd ko decrease 4;


let ans=arr.map((val,idx)=>{
    if(idx%2==0)return val+4;
    else return val-4;
})

console.log(ans);