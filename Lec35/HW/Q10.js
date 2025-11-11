
let students = [ 
{ name: "Rohan", marks: [80, 70, 90] }, 
{ name: "Neha", marks: [85, 75, 95] }, 
{ name: "Aarav", marks: [60, 65, 70] } 
]; 





function avg(std){
    //logic
let result=[];
 for(let obj of std){
    
    let sum=0;
    for(let mark of obj.marks){
        sum=sum+mark;
    }
    obj.avg=(sum/obj.marks.length)
    delete obj.marks;
    result.push(obj);
 }

 return result;


}


console.log(avg(students))