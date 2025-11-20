
const people = [
  { firstName: "Aarav", lastName: "Sharma", age: 22 },
  { firstName: "Meera", lastName: "Patel", age: 25 },
  { firstName: "Rohan", lastName: "Gupta", age: 24 },
  { firstName: "Sneha", lastName: "Iyer", age: 21 },
  { firstName: "Arjun", lastName: "Mehta", age: 23 },
  { firstName: "Kavya", lastName: "Reddy", age: 26 },
  { firstName: "Priya", lastName: "Nair", age: 27 },
  { firstName: "Dev", lastName: "Bose", age: 28 },
  { firstName: "Nisha", lastName: "Pillai", age: 22 },
  { firstName: "Vikram", lastName: "Das", age: 24 }
];

let allName= people.map((person)=> person.firstName+" "+person.lastName)

console.log(allName)
