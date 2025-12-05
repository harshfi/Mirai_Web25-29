
//talk  -> date -> dinner -> movie ->home;

function talk(date){
    setTimeout(()=>{
     console.log("Talking...");
     date(dinner);
    },2000);
    
}


function date(dinner){
    setTimeout(()=>{
     console.log("Going on a Date...");
     dinner(movie);
    },2000);
}

function dinner(movie){
   setTimeout(()=>{
     console.log("Having Dinner...");
     movie(home);
    },2000);
}

function movie(home){
 setTimeout(()=>{
     console.log("watching a Movie...");
     home()
    },2000);
}

function home(){
    console.log("Going Home...");
}

talk(date); // passing date function as an argument to talk function

