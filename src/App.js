import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Daniela Arias and is{" "}
          <a
            href="https://github.com/wecodeschool/react-weather-app.git"
            target="_blank"
          >
            open-sourced on GitHub{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
