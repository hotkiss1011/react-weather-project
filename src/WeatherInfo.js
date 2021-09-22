import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
    return (
      <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.desc}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <span className="float-left">
                <WeatherIcon code={props.data.icon} size={52} />
              </span>
              <span className="float-left">
                <WeatherTemp fahrenheit={props.data.temp} />
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
}