
function createCounter(num){
 
    let count=num;
    let intial_Value=num;

     {
        function increase(){
       count++;
       console.log("current Value:",count)
    }

    function decrease(){
        count--;
        console.log("current Value:", count)
    }
    function reset(){
        count=intial_Value;
        console.log("current Value:", count)
    }

   return {
        increase,
        decrease,
        reset
   }
    
}


let counter1= createCounter(5);

counter1.increase();

counter1.increase();
counter1.increase();

counter1.decrease();
counter1.decrease();


counter1.reset();
