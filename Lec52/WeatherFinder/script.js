
let city=document.querySelector('.city')
let btn=document.querySelector('.btn')
let h2=document.querySelector('h2');
let h1=document.querySelector('h1');

let apikey="cd6a4a0739a2b1802de49804971c6848";
let cityName="";

city.addEventListener('change',(e)=>{
 cityName=e.target.value;
 console.log(cityName);
})

btn.addEventListener('click',async ()=>{
    let url= `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apikey}`;

    let location= await fetch(url);
    let locData= await location.json();

    // console.log(locData[0])
    
    let lat=locData[0].lat;
    let lon=locData[0].lon;
    console.log(lat,lon);
    
    //fetch weather data
    fetchWeather(lat,lon);

})





async function fetchWeather(lat,lon){
    //https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric
    let weatherUrl= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`

    let weather= await fetch(weatherUrl);

    let weatherData= await weather.json();
    h1.innerText=(weatherData.main.feels_like - 273.15).toFixed(2)+" °C"
    h2.innerText=cityName.toUpperCase()


}
