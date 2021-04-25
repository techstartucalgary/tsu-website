import React from "react";
import "./Register.css"
import logo from "images/tech-start-logo-white.png";

function Register(props){

    return (
        <div className = "registerStyling">
               <link rel="stylesheet"
          href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
             <div className = "registerHeading">
                <img src = {logo} className = "registerLogo"/>
                <h3>Get Started with TechStart's Community</h3>
             </div>  
            
            <p className = "registerIntro">Find people to connect with and post about your new projects
            and ideas as a TechStart Community Member.</p>
            <form className = "registerForm">
                <div className = "registerDiv">
                <i class="fa fa-user icon">
                  </i>
                    <input type="text" id="registerName" placeholder = "Name"/><br></br>
                </div>
                <div className = "registerDiv">
                    <i class="fa fa-envelope icon">
                  </i>
                    <input type="text" id="registerEmail" placeholder = "Email"/><br></br>
                </div>
                <div className = "registerDiv">
                     <i class="fa fa-key icon">
                    </i>
                    <input type="password" id="registerPassword" placeholder="Password"/><br></br>
                </div>
                <input type="submit" id = "registerSubmit" value = "Get Started!"/>

            </form>
            <div className = "switchToLogin">
                <h5 className = "logInLink">Already have an account?</h5>
                 <button className= "loginSwitch" onClick = {props.switchMode}><i class="fa fa-lock icon">
                  </i> Log In</button>
            </div>
        </div>
    );
}

export default Register;