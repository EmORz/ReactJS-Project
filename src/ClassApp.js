import React, { Component } from "react";

import logo from "./logo.svg";

import Button from "./Button";
import Counter from "./Counter";
import Input from "./Input";

class ClassApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      isLoading: true,
    };

    this.counters = [0, 1, 2, 3, 4, 5, 6];
  }

  renderCounters() {
    return this.counters.map((counter, index) => {
      return <Counter key={index} counter={counter} />;
    });
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 2000);
  }

  render() {
    if (this.state.isLoading) {
      return <span>Loading ...</span>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Input />
          <p>{this.props.name} KOLKKKKK</p>

          {this.renderCounters()}

          <p>Class Component!</p>
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
      </div>
    );
  }
}

export default ClassApp;
