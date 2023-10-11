import React, { useState, useEffect } from "react";
import axios from "axios";

import DayForecast from "./DayForecast";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);
  


  if (loaded) {
    return (
      <div className="WeatheForecast container">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col text-center" key={index}>
                  <DayForecast data={dailyForecast} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
    const key = "4b3503b2f08a729413c4d33ef1186004";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${key}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
