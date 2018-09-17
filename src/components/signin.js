import React, {Component} from "react";

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: props.email || "",
      password: ""
    }
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      email: "",
      password:""
    })
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            autoComplete="off"
            value={this.state.email}
            onChange={this.handleChange}/>
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}/>
        </div>
        <button type="submit">Submit Form</button>
      </form>
    )
  }
}

export default SignIn;
