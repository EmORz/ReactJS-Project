import React from "react";
import Footer from './Footer/Footer'
import Navigation from './Navigation/Navigation'
//import { Route, Switch, withRouter } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import Button from "./Button";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button />
        <p>Functional Component!</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
