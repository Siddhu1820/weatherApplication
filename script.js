const apiKey="4a05427e3bbe5444b5f3c8775439656f";
const url ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const input=document.querySelector(".search input");
const btn=document.querySelector(".search button");

const icon =document.querySelector(".weather-icon");
async function checkWeather(city){
    const response= await fetch(url+city+`&appid=${apiKey}`);
    var data = await response.json();
    temp.innerText=data.main.temp+"°c";
    humidity.innerText=data.main.humidity;
    wind.innerText=data.wind.speed+" km/hr";
    document.querySelector(".city").innerText=city;
    if(data.weather[0].main==="clouds"){
        icon.src="./images/clouds.png"
    }
    else if(data.weather[0].main==="clear"){
        icon.src="./images/clear.png"
    }
    else if(data.weather[0].main==="drizzle"){
        icon.src="./images/drizzle.png"
    }
   else if(data.weather[0].main==="mist"){
        icon.src="./images/mist.png"
    }
   else if(data.weather[0].main==="rain"){
        icon.src="./images/rain.png"
    }
    else if(data.weather[0].main==="snow"){
        icon.src="./images/snow.png"
    }

    document.querySelector(".weather").style.display="block";

}

btn.addEventListener("click",()=>{
   checkWeather(input.value);
})