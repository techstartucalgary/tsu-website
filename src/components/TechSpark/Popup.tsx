import React from "react"
import PostCreation from "components/TechSpark/PostCreation"
import "./Popup.css"
import { render } from "@testing-library/react"
import { disconnect } from "node:process"
import SignIn from "./SignIn"

function Popup(props : any){
    function displayChild(){
            switch(props.windowType){
            case 1:
                console.log("Post window clicked")    
                return(
                    <PostCreation/>
                )
            case 2:
                console.log("Login clicked")
                return(
                    <SignIn/>
                )
            default:
                console.log("Default rendered")
                return(
                    <PostCreation/>
                )
            }
    }
    function hideChild(){
        console.log("Popup hidden")
        props.hidePost()
    }
    return(
        <div className="popup">
            <div className="popup__background" onClick={hideChild}/>
            <div className="popup__inner">
                {displayChild()}
            </div>
        </div>
    );
}
export default Popup