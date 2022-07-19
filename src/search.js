import { forecastWeather, getWeather } from "./index.js";

//cache DOM
export let searchWeather = document.getElementById('lookup');
let weatherButton = document.querySelector('.lookup');

function searchIt() {
    weatherButton.addEventListener('click', () => {
        getWeather(searchWeather.value);
        forecastWeather(searchWeather.value);
    })
}

searchIt();
