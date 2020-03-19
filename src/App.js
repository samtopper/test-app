import React from "react";
import logo from "./logo.svg";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Projects from "./projects";

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}

        <h1>Manage Employees</h1>
      </header>

      <main>
        <Projects />
      </main>

      <footer className="App-footer">This is a footer</footer>
    </div>
  );
}

export default App;
