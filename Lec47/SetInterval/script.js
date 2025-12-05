
// setInterval(function,delay);

// setInterval(function(){
//     console.log("Hello World");
// },1000)

let count = 0;

setInterval(function(){
   document.querySelector("h2").innerText = `Time Elapsed: ${count} seconds`;
   count++;
},10);