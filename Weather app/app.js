const apiKey = "b684a6e68014d2cf132d9fc61c73a6e1";
const cityInputEl = document.getElementById("city-input");
const weatherDataEl = document.getElementById("weather-data");
const  formEl = document.querySelector("form");

formEl.addEventListener("submit" , (e) =>{
    e.preventDefault();
    const cityValue = cityInputEl.value;
    getWeatherData(cityValue);
})

async function getWeatherData(cityValue) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`);
        if(!response.ok) {
            throw new Error("Newtwork response was not ok")
        }

        const data = await response.json();
        console.log(data);

        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const details= [
            `Feels like: ${Math.round(data.main.feels_like)}°C`,
            `Humidity: ${data.main.humidity}%` , `Wind speed: ${data.wind.speed}km/h`
        ];

        weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather icon">`;

        weatherDataEl.querySelector(".temperature").textContent = `${temperature}°C`;

        weatherDataEl.querySelector(".description").textContent = `${description}`;
        
        weatherDataEl.querySelector(".details").innerHTML = details.map((details) =>`<div>${details}</div>`).join("");

    } catch (error) {
       weatherDataEl.querySelector(".icon").innerHTML = "";

        weatherDataEl.querySelector(".temperature").textContent ="";

        weatherDataEl.querySelector(".description").textContent = "An error happened, please try again later.";
        
        weatherDataEl.querySelector(".details").innerHTML = "";
    }
}