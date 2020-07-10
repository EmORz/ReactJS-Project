import React, { Component } from "react";
import Input from "./Input";
import { login } from "./API/remote";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      error: false,
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async onSubmitHandler(e) {
    //return correct value
    // console.log(this.state)

    e.preventDefault();
    if (this.state.password !== this.state.repeat) {
      this.setState({
        error: {
          message: "Check the form for errors",
          errors: {
            repeat: "Passwords don't match",
          },
        },
      });
      return;
    }

    console.log(this.state);

    const res = await login(this.state.username, this.state.password);

    if (!res.success) {
      this.setState({ error: res });
      return;
    }
    this.props.history.push("/");
  }

  render() {
    // let errors = null;
    // if (this.state.error) {
    //     errors = (
    //         <div>
    //             <h2 className="errorMessage">{this.state.error.message}</h2>
    //             {Object.keys(this.state.error.errors).map(k => {
    //                 return <p key={k}>{this.state.error.errors[k]}</p>;
    //             })}
    //         </div>
    //     );
    // }

    return (
      <div className="container">
        <h1>Register</h1>
        {/* {errors} */}
        <form onSubmit={this.onSubmitHandler}>
          <Input
            name="username"
            value={this.state.username}
            onChange={this.onChangeHandler}
            label="Username"
          />
          <Input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onChangeHandler}
            label="Password"
          />
          <Input
            name="repeat"
            type="password"
            value={this.state.repeat}
            onChange={this.onChangeHandler}
            label="Repeat password"
          />
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
      </div>
    );
  }
}

export default LoginPage;
