import React from "react"
import PostCreation from "components/TechSpark/PostCreation"
import "./Popup.css"
import { render } from "@testing-library/react"
import { disconnect } from "node:process"
import SignIn from "./SignIn"

function Popup(props : any){
    function displayChild(){
            switch(props.windowType){
            case "PostCreation":
                console.log("Post window clicked")    
                return(
                    <PostCreation/>
                )
            case "SignIn":
                console.log("Login clicked")
                return(
                    <SignIn/>
                )
            }
    }
    function hideChild(){
        console.log("Popup hidden")
        props.hidePost()
    }
    return(
        <div className="popup" onClick={hideChild}>
            <div className="popup__inner">
                {displayChild()}
            </div>
        </div>
    );
}
export default Popup