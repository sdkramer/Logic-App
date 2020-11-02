import Axios from "axios";
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
    Axios.post('http://localhost:4000/login', this.state.credentials).then((res) => {
console.log(res);
    })
    .catch((err) => {console.log(err);})
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
