import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <h1>New York</h1>
            <ul>
                <li>
                    Wednesday
                </li>
                <li>
                    Mostly Cloudy
                </li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Mostly Cloudy" />
                    6°C
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            Precipitation: 15%
                        </li>
                        <li>
                            Humidity: 72%
                        </li>
                        <li>
                            Wind: 2 mph
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}