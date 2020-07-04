import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "   ",
    };
  }

  chageValue = (e)=>{
      this.setState({
          value: e.target.value

      })
  }

  render() {
    return (
      <div>
        <input onChange={this.chageValue} />

        <p> {this.state.value}</p>
      </div>
    );
  }
}

export default Input;
