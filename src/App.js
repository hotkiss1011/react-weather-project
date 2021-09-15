import './App.css';
import Weather from "./Weather";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This was coded by {" "}
          <a href="https://adoring-haibt-562efa.netlify.app/">Amanda Hotchkiss</a>
          {" "} and is open-sourced on {" "} 
          <a href="https://github.com/hotkiss1011/react-weather-project" target="_blank">GitHub</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
