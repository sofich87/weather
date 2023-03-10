
import { weather_data } from './data.js';

/*let element = document.getElementById("dropdownMenuButton");

    element.addEventListener('change', (event) => {
        let ciudad= event.target.weather_data;

        let padre = document.getElementsByClassName('dropdown-item');

        padre=padre[0];
        for (let clave of ciudad){
            `<option>${clave['city']}</option>`
            padre.innerHTML+=ciudad;
            loadDayForecastData(ciudad);
        }

        
    });*/

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

    let iconl=document.getElementById('late_icon');
    iconl.innerHTML =forecastToday[0].icon;

    let iconnight=document.getElementById('night_icon');
    iconnight.innerHTML =forecastToday[1].icon;

    let temp_late= document.getElementById('late_temperature');
    temp_late.innerHTML=forecastToday[0].temperature;

    let temp_night= document.getElementById('night_temperature');
    temp_night.innerHTML=forecastToday[1].temperature;

    let forecast_late= document.getElementById('late_forecast');
    forecast_late.innerHTML=forecastToday[0].forecast;

    let forecast_night= document.getElementById('night_forecast');
    forecast_night.innerHTML=forecastToday[1].forecast;

    let text_late= document.getElementById('late_text');
    text_late.innerHTML=forecastToday[0].text;

    let text_night= document.getElementById('night_text');
    text_night.innerHTML=forecastToday[1].text;
    

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
