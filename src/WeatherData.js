import React from "react";
import FixedDate from "./FixedDate";
import Units from "./Units";
import WeatherIcon from "./WeatherIcon";


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
            <WeatherIcon code={props.info.icon} size={52} />
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
    </div>
  );
}
