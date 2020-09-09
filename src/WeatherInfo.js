import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
          </ul>
          <div className="todays-temperature">
            <strong className="temperature">
              {Math.round(props.data.temperature)}
            </strong>
            <span className="units">
              <a href="#" className="active">
                °C
              </a>{" "}
              |<a href="#">°F</a>
            </span>
          </div>
          <span className="text-capitalize">{props.data.description}</span>
        </div>
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            className="icon"
          />
          <ul>
            <li>
              Humidity: <span>{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span>{props.data.wind}</span> Km/H
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
