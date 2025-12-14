
async function fetchdata(url){
    let data= await fetch(url);
    console.log(data);
     return data;
}


console.log(fetchdata('https://dummyjson.com/products'));