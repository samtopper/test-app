import React from "react";
import logo from "./logo.svg";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Projects from "./projects";

import Header from "./components/header";

function App() {
  return (
    <div className="container">
      <Header title="Sameer Portfolio" logo={logo} />

      <main className="">
        <Projects />
      </main>

      <footer className="App-footer">This is a footer</footer>
    </div>
  );
}

export default App;
