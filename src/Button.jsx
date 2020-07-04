import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
    this.updateCount = this.updateCount.bind(this);
  }

  updateCount() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }
  render() {
    return (
      <button onClick={this.updateCount}>
              Clicked {this.state.count} times
      </button>
    );
  }
}

export default Button;
