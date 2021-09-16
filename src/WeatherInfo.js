import React from "react";
import FormattedDate from "./FormattedDate";

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
              <img
                src={props.data.iconURL}
                alt={props.data.desc}
                className="float-left"
              />
              <span className="tempAndUnits">
                <span className="temp">6</span>
                <span className="units">°C</span>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: {props.data.rain}%</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
}