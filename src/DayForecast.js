import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./DayForecast.css";


export default function DayForecast(props) {
  function Day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.dt * 1000);
    let day = days[date.getDay()];
    return day;
  }
  function maxTemp() {
    let maxTemperature = Math.round(props.data.temp.max);
    return maxTemperature;
  }

  function minTemp() {
    let mintemperature = Math.round(props.data.temp.min);
    return mintemperature;
  }

  return (
    <div className="DayForecast">
      <div>{Day()}</div>
      <div className="forecast-img mt-3 mb-3">
        <WeatherIcon code={props.data.weather[0].icon} size={36} />
      </div>
      <div>
        <span className="me-2">{maxTemp()}°</span>
        <span className="faint">{minTemp()}°</span>
      </div>
    </div>
  );
}
