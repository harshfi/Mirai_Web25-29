
let stds={
    s1:{name:"Alice",marks:85},
    s2:{name:"Bob",marks:90},
    s3:{name:"Charlie",marks:78},
    s4:{name:"David",marks:92},
    s5:{name:"Eve",marks:88}
}

//write a function which will take the student object and 
// return the name of the students who scored >=90

function above90(stds){
    let names=[]

    for(let key in stds){
        if(stds[key].marks>=90){
            names.push(stds[key].name)
        }
    }
    return names;
}

let res_Name=above90(stds);
console.log(res_Name);