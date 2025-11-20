
let arr=[3,7,1,8,9];

//double =[6,14,2,16,18];
//square= [9,49,1,64,81];



function double( val){
    return 2*val;
}

// for(let i=0;i<arr.length; i++){
//     ans[i]=double(arr[i]);
// }


let ans=arr.map(double);

console.log("double of the array elements are",ans)





// let squareArray=arr.map(sq);

//we can directly pass the function
// let squareArray=arr.map(function sq(val){
//     return val*val
// });

// we can have anonimious function

// let squareArray=arr.map(function (val){
//     return val*val
// });


//arrow function

// let squareArray=arr.map( (val)=>{
//     return val*val
// });

//modified arrow function

let squareArray=arr.map( (val)=> val*val);


 


console.log(squareArray)

