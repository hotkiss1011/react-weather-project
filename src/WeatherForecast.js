import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"
import axios from "axios";
import Weather from "./Weather";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "1855e7cc439afb5e695c7a967c800d7c";
  let lat = props.coord.lon;
  let lon = props.coord.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temp">
            <span className="temp-high">20°</span>
            <span className="temp-low">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}