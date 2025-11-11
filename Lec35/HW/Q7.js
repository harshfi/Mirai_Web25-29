const employees = [
  { name: "Alice", salary: 30000, experience: 2 },
  { name: "Bob", salary: 45000, experience: 5 },
  { name: "Carol", salary: 38000, experience: 3 },
  { name: "David", salary: 50000, experience: 7 }
];



function updateSalaries(emp){
for(let i=0;i<emp.length;i++){
    if(emp[i].experience>=5){
        emp[i].salary=1.2*emp[i].salary;
    }
    else {
        emp[i].salary=1.1*emp[i].salary;
    }
}
return emp;
}

console.log(updateSalaries(employees));