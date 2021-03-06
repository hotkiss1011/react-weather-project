import './App.css';
import Weather from "./Weather";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This was coded by{" "}
          <a href="https://adoring-haibt-562efa.netlify.app/">
            Amanda Hotchkiss
          </a>{" "}
          and is open-sourced on{" "}
          <a href="https://github.com/hotkiss1011/react-weather-project">
            GitHub
          </a>{" "}
          and hosted using <a href="https://www.netlify.com/">Netlify</a>.
        </footer>
      </div>
    </div>
  );
}

export default App;
