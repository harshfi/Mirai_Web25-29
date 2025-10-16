let arr=[2,3,4,5,6,8,1,4,6];
let size=4;
let ans=[]
for(let i=0;i<arr.length; ){
  
    let ch_arr=[];
    let chunk=size;
   // it will contain the chunk size element
    while(i<arr.length && chunk> 0 ){
        ch_arr.push(arr[i]);
        i++;
        chunk--;
    }

ans.push(ch_arr);

}

console.log(ans)