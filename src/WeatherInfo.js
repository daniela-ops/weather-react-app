import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
          <br />
          <br />
          <span className="text-capitalize">{props.data.description}</span>
        </div>
        <div className="col-6">
          <div className="weather-icon">
            <WeatherIcon code={props.data.icon} />
          </div>
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
