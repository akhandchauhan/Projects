console.log("hola");


async function showWeather(){
    // let latitude=15.33;
    // let longitude=74.8333;
    try{
        let city="goa";
        const API_KEY="46316a53a27c8a96562dfbccaa7bf361";
    
        const response=await fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric');
        const data= await response.json();
        console.log("weather data:-> ",data);
    
        let newPara=document.createElement('p');
        newPara.textContent='${data?.main?.temp.toFixed(2)} C'
        document.body.appendChild(newPara);
        renderWeatherInfo(data);
    }
    catch(err){

    }
   
}