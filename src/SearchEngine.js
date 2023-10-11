import React, { useState } from "react";
import axios from 'axios';

import WeatherData from "./WeatherData";
import WeatherForecast from "./WeatherForecast";


export default function SearchEngine(props) {
    
    const [data, setData] = useState({ load: false });
    const [city, setCity] = useState(props.city);
    

    function handleResponse(response) {

     setData({
         load: true,
         coordinates: response.data.coord,
         temperature: response.data.main.temp,
         date: new Date(response.data.dt * 1000),
         description: response.data.weather[0].description,
         humidity: response.data.main.humidity,
         wind: response.data.wind.speed,
         city: response.data.name,
         icon:response.data.weather[0].icon,
     });
       
    }
    function fetchData() {
   const key = "4b3503b2f08a729413c4d33ef1186004";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

    axios.get(url).then(handleResponse);
    }
    function handleSubmit(event) {
        event.preventDefault();
        fetchData();

    }
    function changeCity(event) {
        setCity(event.target.value);
    }

    
    if (data.load) {
        return (
            <div className="Overview">
                <form id="search-form" className="mb-3" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input
                                type="search"
                                placeholder="Type a city.."
                                className="form-control"
                                id="city-input"
                                autoComplete="off"
                                onChange={changeCity}
                                
                            />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100" />
                        </div>
                    </div>
                </form>
                <WeatherData info={data} />
                <WeatherForecast coordinates={data.coordinates}/>
               </div>
        );
    }
    else {
        fetchData();
    
        return (
            "loaded.."
        );
    }
    }
         
    
     
  
    
    
