import React from "react";
import FixedDate from "./FixedDate";
import Units from "./Units";
import WeatherForecast from "./WeatherForecast";

export default function WeatherData(props) {
  return (
    <div className="Data">
      <ul>
        <li className="fs-1 text-tertiary">
          {" "}
          <h1>{props.info.city}</h1>
        </li>
        <li id="date">
          <FixedDate date={props.info.date} />
        </li>
        <li id="description">{props.info.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="weatherIcon">
            <img src={props.info.icon} alt={props.info.description} />
            <Units celcuis={props.info.temperature} />
          </div>
        </div>
        <div className="col-6 spaced-list">
          <ul>
            <li id="humidity">Humidity: {props.info.humidity}%</li>
            <li id="wind">Wind: {props.info.wind}km/h</li>
          </ul>
        </div>
      </div>
      <WeatherForecast />
    </div>
  );
}
