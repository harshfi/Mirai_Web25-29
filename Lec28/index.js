
const student={
    "name":"Harsh Tripathi",
    "age": 10,
    "phn_no":8317072805,

}


console.log(student)

console.log("name => ",student.name);

console.log(student.phn_no);

for(let i in student){
    console.log(i, student[i] );
}


console.log(student["name"]);



let obj1={
    "":"empty String",
    " ":"this is space"
}

console.log(obj1)

// console.log(obj1."");
// console.log(obj1." ");

console.log(obj1[""])
console.log(obj1[" "])


let obj2={
    "arr":[],
    "role":{"name":"harsh",
        "dept":"SDE"}
}


obj2.arr.push(5);

console.log(obj2);

console.log(obj2.role.dept)


obj1.class=1;


console.log(obj1)
