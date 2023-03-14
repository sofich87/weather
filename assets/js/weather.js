
import { weather_data } from './data.js';


let loadDayForecastData = (city) => {

    //let ciudadSelec=document.getElementById('127947').value;
        let [ciu, ...other] = weather_data;
        let {city_code: city_code1, city: city1, date: date1, maxtemperature: maxtemperature1, mintemperature: mintemperature1, cloudiness: cloudiness1, wind: wind1, rainfall: rainfall1, forecast_today: forecastToday} = ciu;
    
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

        let iconlate=document.getElementById('late_icon');
        iconlate.innerHTML =forecastToday[0].icon;

        let iconnight=document.getElementById('night_icon');
        iconnight.innerHTML =forecastToday[1].icon;

        let temp_late= document.getElementById('late_temperature');
        temp_late.innerHTML=forecastToday[0].temperature;

        let temp_night= document.getElementById('night_temperature');
        temp_night.innerHTML=forecastToday[1].temperature;

        let forecast_late= document.getElementById('late_forecast');
        forecast_late.innerHTML=forecastToday[0].forecast;

        let    forecast_night= document.getElementById('night_forecast');
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

    };
//boton de seleccion de ciudades
    let ciudadesBoton =() => {
        let element = document.getElementById('dropdownMenuButton');
        for (let i of weather_data){
            let lista = `<option id='${i.city_code}'class="dropdown-item" value="${i.city}">${i.city}</option>`
            element.innerHTML+=lista;
        }
    }
    
    document.addEventListener('DOMContentLoaded',(event)=>{
        let boton= document.getElementById('127947');
        let boton1= document.getElementById('126320');
        let boton2= document.getElementById('124695');

        if(boton == weather_data.city_code.value){
            loadDayForecastData();
        }else if(boton1==weather_data.city_code.value){
            loadDayForecastData();
        }else{
            loadDayForecastData();
        }

    })
    document.addEventListener("DOMContentLoaded", (event) => {
    
        loadDayForecastData();
        
    
        let element = document.getElementById('loadinfo');
    
        element.addEventListener('click', (event) => {
        
            loadWeekForecastData();
        
        });
    });
    
    let element = document.getElementById("dropdownMenuButton");
    
        element.addEventListener('click', (event) => {
        //Código a ejecutar
        //El event contiene la información del elemento seleccionado
        let ciudad = event.target.value
        loadDayForecastData(ciudad);
        
        let padre = document.getElementsByClassName("list-group")
        padre = padre[0]
        padre.innerHTML = " "
            
    });
    


loadDayForecastData();
loadWeekForecastData();
ciudadesBoton();
