
import { weather_data } from './data.js';

let loadDayForecastData = () => {
    let [gye, ...other] = weather_data;
    let {city_code: city_code1, city: city1, date: date1, maxtemperature: maxtemperature1, mintemperature: mintemperature1, cloudiness: cloudiness1, wind: wind1, rainfall: rainfall1, forecast_today: forecastToday} = gye;

    let h5 = document.getElementById('city');
    h5.innerHTML=city1;

    let fecha= document.getElementById('date');
    fecha.innerHTML = date1;

    let maxtemp=document.getElementById('maxtemperature');
    maxtemp.innerHTML=maxtemperature1;

    let mintemp=document.getElementById('mintemperature');
    mintemp.innerHTML=mintemperature1;

    let cl=document.getElementById('cloudiness');
    cl.innerHTML =cloudiness1;

    let w=document.getElementById('wind');
    w.innerHTML =wind1;

    let r=document.getElementById('rainfall');
    r.innerHTML =rainfall1;

}

let loadWeekForecastData = () => {
	let [gye, ...other] = weather_data;
    let {forecast_week: forecastweek}= gye;

    let padre = document.getElementsByClassName('list-group');
    
    padre=padre[0];
    
    for (let clave of forecastweek){
        forecastweek= `<li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
        <div class="d-flex flex-column">
            <h6 class="mb-1 text-dark font-weight-bold text-sm">${clave['text']}</h6>
            <span class="text-xs">${clave['date']}</span>
        </div>
        <div class="d-flex align-items-center ">
            <span class="font-weight-bold text-dark mx-2"> ${clave['temperature'].max}</span> |  <span class="text-dark mx-2"> ${clave['temperature'].min}</span>
            <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${clave['icon']}</i></div>
        </div>
        </li>`
        padre.innerHTML+=forecastweek;
    }



}


loadDayForecastData();
loadWeekForecastData();