import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="weather-app-container-wrapper">
        <div className="weather-app-container">
          <form id="search-form" class="mb-3">
            <div className="row">
              <div class="col-9">
                <input
                  type="search"
                  placeholder="Type a city..."
                  className="form-control"
                  id="city-input"
                  autocomplete="off"
                  autoFocus="on"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <h1 id="city">New York</h1>
          <div className="row">
            <div className="col-6">
              <ul>
                <li id="date">Saturday, July 18 2020</li>
                <li id="time">3:11 PM</li>
              </ul>
              <div className="todays-temperature">
                <strong id="temperature">75</strong>
                <span className="units">
                  <a href="#" id="celsius-link" className="active">
                    °C
                  </a>{" "}
                  |
                  <a href="#" id="fahrenheit-link">
                    °F
                  </a>
                </span>
              </div>
              <span id="description" className="description">
                Beautiful
              </span>
            </div>
            <div className="col-6">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                id="icon"
                className="icon"
              />
              <ul>
                <li>
                  Humidity: <span id="humidity"></span>%
                </li>
                <li>
                  Wind: <span id="wind"></span> Km/H
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
