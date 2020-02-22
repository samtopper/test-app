import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Projects from "./projects";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>

      <main>
        main section
        <Projects />
      </main>

      <footer className="App-footer">This is a footer</footer>
    </div>
  );
}

export default App;
