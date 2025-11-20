
console.log(":hi")

let heading= document.getElementsByClassName("heading");

console.log("My heading is ",heading);

console.log("my first element is",heading[0]);


// accessing the element by id name

let movieList= document.getElementById("list")

console.log("movie lists",movieList)

// accessing the element by TagName

let allList=document.getElementsByTagName("li");

console.log("Li tag name",allList);



//QuerySelector

let h1= document.querySelector(".heading");

console.log("querySelector is applied",h1);


let allClassHeading=document.querySelectorAll(".heading")

let id=document.querySelector("#list")

console.log(allClassHeading);

console.log(id);


let tag=document.querySelectorAll('li')

console.log("querySelector", tag)

