
//phone -> Date -> Dinner -> Movie -> apne apne Ghar

let p= new Promise((res,rej)=>{

    console.log("talking....")
    setTimeout(()=>{
     res("We are going on a Date");
    },3000)
})

p.then((data)=>{
    console.log("My decision is :",data);

    return new Promise((res,rej)=>{

        res("Dinner is over");
    })
}).then((data)=>{
   console.log(data);
   return new Promise((res,rej)=>{
    res("We are seeing movie")

   })
})
.then((data)=>{
    console.log("we have seen the movie and now we are going home")
     
    console.log("We are going to home");
})
.catch(()=>{
    console.log("reject");
})
