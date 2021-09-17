import React, { useState } from "react";

export default function WeatherTemp(props) {
    const [unit, setUnit] = useState("fahrenheit");

    function fToC(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function cToF(event) {
      event.preventDefault();
      setUnit("fahrenheit");
    }

    if (unit === "fahrenheit") {
      return (
        <div className="WeatherTemp">
          <span className="temp">{Math.round(props.fahrenheit)}</span>
          <span className="unit">
            °F |{" "}
            <a href="/" onClick={fToC}>
              °C
            </a>
          </span>
        </div>
      );
    } else {
      return (
        <div className="WeatherTemp">
          <span className="temp">{Math.round((props.fahrenheit - 32) * 5 / 9)}</span>
          <span className="unit">
            °C |{" "}
            <a href="/" onClick={cToF}>
              °F
            </a>
          </span>
        </div>
      );
    }
}