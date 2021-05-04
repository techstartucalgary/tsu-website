import React from "react"
import PostCreation from "components/TechSpark/PostCreation"
import "./Popup.css"
import { render } from "@testing-library/react"
import { disconnect } from "node:process"

function Popup(){
    function displayChild(){
        return(
            <PostCreation/>
        )
    }
    return(
        <div className="popup">
            <div className="popup__inner">
                {displayChild()}
            </div>
        </div>
    );
}
export default Popup