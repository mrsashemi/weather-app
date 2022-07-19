
import {format} from 'date-fns'

//cache DOM
let currentWeather = document.querySelector('.currentWeather');
let currentCity = document.querySelector('.city');
let currentTime = document.querySelector('.time');
let currentTemp = document.querySelector('.temp');
let currentIcon = document.querySelector('.weatherIcon')

let tempIcon = document.querySelector('.tempIcon');
let humidityIcon = document.querySelector('.humidityIcon');
let cloudIcon = document.querySelector('.cloudIcon');
let windIcon = document.querySelector('.windIcon');

let feelsLike = document.querySelector('.itFeelsLike');
let humidity = document.querySelector('.humidityPercentage');
let cloudiness = document.querySelector('.cloudiness');
let wind = document.querySelector('.windSpeed');

let dayOfWeek = document.querySelectorAll('.day');
let highTemp = document.querySelectorAll('.high');
let lowTemp = document.querySelectorAll('.low');
let weeklyIcon = document.querySelectorAll('.weekIcon');

let currentDay;
let currentDate;

async function getWeather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Osaka&APPID=99b2660cb4dd6a884a9f1fbb2a34ba05&units=imperial', {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);

    currentWeather.textContent = weatherData.weather[0].description;
    currentCity.textContent = weatherData.name;
    currentTemp.textContent = `${weatherData.main.feels_like} \u00B0 F`;
    currentIcon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`


   let timeChange = weatherData.timezone * 1000
   let utcTime = new Date().getTimezoneOffset()*60*1000;

    let today = format(new Date((new Date().getTime())+utcTime+timeChange), 'EEEE yyyy-MM-dd HH:mm');
    currentTime.textContent = today;
    currentDay = today.split(' ')[0];
    currentDate = today.split(' ')[1];
    console.log(currentDate);
    console.log(currentDay);

    feelsLike.textContent = `${weatherData.main.feels_like} \u00B0 F`;
    humidity.textContent = `${weatherData.main.humidity}%`
    cloudiness.textContent = `${weatherData.clouds.all}%`
    wind.textContent = `About ${weatherData.wind.speed} mph`

    tempIcon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    humidityIcon.src = 'https://icons.veryicon.com/png/128/weather/weather-colored-outline/humidity-24.png';
    cloudIcon.src = `https://www.veryicon.com/download/png/weather/icon-by-qning/weather-icon-cloudy?s=256`;
    windIcon.src = 'https://cdn-icons-png.flaticon.com/128/1458/1458846.png';

}

getWeather();

async function forecastWeather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=Osaka&APPID=99b2660cb4dd6a884a9f1fbb2a34ba05&units=imperial', {mode: 'cors'});
    const futureData = await response.json();
    console.log(futureData);

    let daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let index = daysArray.indexOf(currentDay) + 1;

    dayOfWeek.forEach(e => {
       e.textContent = daysArray[index];
       (index == 6) ? index = 0 : index++;
    })

    let i = 0;
    let forecastDateArr = [];

    for (let i = 0; i < futureData.list.length; i++) {
        if(futureData.list[i].dt_txt.split(' ')[0] != currentDate) {
            currentDate = futureData.list[i].dt_txt.split(' ')[0];
            forecastDateArr.push(i);
        }
    }

    console.log(forecastDateArr);

    highTemp.forEach(e => {
        e.textContent = `${futureData.list[forecastDateArr[i]].main.temp_max} \u00B0 F`;
        (i == forecastDateArr.length - 1) ? i = 0 : i++;
    })

    lowTemp.forEach(e => {
        e.textContent = `${futureData.list[forecastDateArr[i]].main.temp_min} \u00B0 F`;
        (i == forecastDateArr.length - 1) ? i = 0 : i++;
    })

    weeklyIcon.forEach(e => {
        e.src = `http://openweathermap.org/img/wn/${futureData.list[forecastDateArr[i]].weather[0].icon}@2x.png`;
        (i == forecastDateArr.length - 1) ? i = 0 : i++;
    })
    







}

forecastWeather();

