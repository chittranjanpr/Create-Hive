import React from "react";
import { Link, Redirect } from "react-router-dom"; 

class Login extends React.Component {
  handleLogin = () => {
    const data = {'username': "chittu", "password": "1234"};
    localStorage.setItem("login_data", JSON.stringify(data))
    window.location.assign("/home")
  }
  render() {
    return (
      <div>
        <button onClick={()=> this.handleLogin() }>Login</button>
      </div>
    );
  }
}

export default Login;
