
let arr1=[2,5,1,7];
let arr2=[9,4,1];
let a1=[8,-1,-2];

//concat
let arr3=arr1.concat(arr2).concat(a1);

console.log(arr3);


//indexOf(element)-> index return;


let arr= [8,3,2,-1,2,6,-1];

console.log(arr.indexOf(2));
console.log(arr.indexOf(-1))

// lastIndexOf(ele)-> index of that element which occurs at last in the array



arr= [8,3,2,-1,2,6,-1];// 2-> 2, 4

console.log(arr.lastIndexOf(2))

console.log(arr.lastIndexOf(-1))

console.log(arr.indexOf(5));

// Reverse the array

arr.reverse();

console.log(arr);

//sort()-> it will sort the array

arr.sort((a,b)=>b-a);// if we wanted to sort in descending

console.log(arr)