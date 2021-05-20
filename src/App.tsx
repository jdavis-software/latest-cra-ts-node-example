import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BoxComponent } from "@somealias";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <BoxComponent />
        </p>
      </header>
    </div>
  );
}

export default App;
