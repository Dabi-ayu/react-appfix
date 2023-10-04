import React, { useState } from "react";

export default function Units(props) {
    const [unit, setUnit] = useState("celcuis");

     function showFahrenheit(event){
         event.preventDefault();
         setUnit("fahrenheit");

    }
    function showCelcuis(event) {
        event.preventDefault();
        setUnit("celcuis");
    }
    
    if (unit === "celcuis") {
    
        return (
            <strong className="Temperature">
                {Math.round(props.celcuis)}
                <span className="degreeValue text-secondary">°C | <a href="/" onClick={showFahrenheit}>°F</a></span>
            </strong>
        );
    }
    else {
        let fahrenheit = (props.celcuis * 9) / 5 + 32;
        return (
            <strong className="Temperature">
                {Math.round(fahrenheit)}
                <span className="degreeValue text-secondary"><a href="/" onClick={showCelcuis}>°C</a> | °F</span>
            </strong>
        );
        }
    }
