let std1 = {
name:"harsh",
phn_num:1234567890,
Address: "ggjygjgj",
age:21
}

for(let key in std1){
    console.log(key,":",std1[key]);
}

delete std1.Address;

console.log("after deleting Address");
console.log(std1);