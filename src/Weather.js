import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: "Wednesday, May 17",
      city: response.data.name,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="weather-app-container-wrapper">
          <div className="weather-app-container">
            <form className="mb-3">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Type a city..."
                    className="form-control"
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
            <h1>{weatherData.city}</h1>
            <div className="row">
              <div className="col-6">
                <ul>
                  <li>Saturday, July 18 2020</li>
                  <li>3:11 PM</li>
                </ul>
                <div className="todays-temperature">
                  <strong className="temperature">
                    {Math.round(weatherData.temperature)}
                  </strong>
                  <span className="units">
                    <a href="#" className="active">
                      °C
                    </a>{" "}
                    |<a href="#">°F</a>
                  </span>
                </div>
                <span className="text-capitalize">
                  {weatherData.description}
                </span>
              </div>
              <div className="col-6">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  className="icon"
                />
                <ul>
                  <li>
                    Humidity: <span>{weatherData.humidity}</span>%
                  </li>
                  <li>
                    Wind: <span>{weatherData.wind}</span> Km/H
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b3b730c3e6af10dda8a23714d4b1cfe9";
    let city = "Paris";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "loading";
  }
}
