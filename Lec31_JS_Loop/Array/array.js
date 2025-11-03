
// int arr[]={2,3,5,7,11}

// let arr=[2,3,5,7,11];

// Arrays is js is hetrogeneous means we can store different data types in single array

let arr1=[2,"harsh",3.5,true,'a'];

console.log(arr1[3])

console.log(arr1)

for(let i=0;i<arr1.length;i++){
    console.log(arr1[i])
}


let arr=[1,2,3,4,5,6,7,8,9,10]

let k=3;


let i=0;
let ans=[];
while(i<arr.length){

    let idx=i+k-1;
    let cnt=0;

    if(idx>=arr.length){
        idx=arr.length-1;
    }
    while(i<arr.length  && cnt<k){
        ans[i]=arr[idx];
        i++;
        idx--;
        cnt++;
    }

}

console.log(ans)

