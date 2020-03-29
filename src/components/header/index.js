import React from "react";

import "./styles.css";

export default ({ title, logo }) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>{title}</h1>
    </header>
  );
};
