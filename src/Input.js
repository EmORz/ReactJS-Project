import React, { Component } from "react";

class Input extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     value: "   ",
  //   };
  // }

  // chageValue = (e)=>{
  //     this.setState({
  //         value: e.target.value

  //     })
  // }

  render() {
    const { name, type = 'text', value, onChange, label } = this.props;
    return (
        <div>
            <label htmlFor="new-email">{label}</label>
            <input
                onChange={onChange}
                name={name}
                id={name}
                type={type}
                value={value} />
        </div>
    );
  }
}

export default Input;
