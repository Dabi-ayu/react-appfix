import React from "react";
import "./App.css";

export default function FixedDate(props) {
 let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];


    let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
    return (
    <span className="FixedDates">
            {day} {hours}:{minutes}
     </span>
    );
}
