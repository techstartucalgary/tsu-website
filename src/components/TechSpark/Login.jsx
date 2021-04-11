import React from "react";
import "./Login.css"
import logo from "../images/tech-start-logo-white.png";

function Login(props){

    return (
        <div className = "loginStyling">
               
            <h1><img src = {logo} className = "loginImage"/> Community Login</h1>
            <form className = "loginForm">
                <p className = "loginP">
                    <label className = "loginLabel" for="username">Username:</label>
                    <input type="text" id="username" placeholder = "Username..."/><br></br>
                </p>
                <p className = "loginP">
                    <label className = "loginLabel" for="password">Password:</label>
                    <input type="password" id="password" placeholder = "Password..."/><br></br>
                </p>

            </form>
            <input type="submit" value = "Login"/>

            <h5 className = "registerLink">Don't yet have an account? <a>Register Here!</a></h5>
        </div>
    );
}

export default Login;