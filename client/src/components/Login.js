import React from "react";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
    console.log(e);
  };

  render() {
    return(
<div>
      <form onSubmit={this.login}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={this.state.credentials.username}
          onChange={this.handleChange}
        />
        <label>Password</label>
        <input
          type="text"
          name="password"
          value={this.state.credentials.password}
          onChange={this.handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
    )
    
  }
}

export default Login;
