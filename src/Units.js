import React from "react";

export default function Units(props) {
    return (
            <strong className="Temperature">
                {Math.round(props.celcuis)}
                <span className="degreeValue text-secondary">°C </span>
            </strong>
        );
    }
  
    
