import React from "react";
import "./PostCreation.css"
import logo from "../images/tech-start-logo-white.png";

function PostCreation(props){

    return (
        <div className = "postCreationStyling">
               
            <h1>Create a Post</h1>
            <form id="postForm">
                <input type="text" id="postTitle" placeholder = "Title..."/><br></br>
            </form>
            <textarea className = "postTextArea" form="postForm"
             placholder="Write your post here...">   
            </textarea>
            <input type="submit" id="postSubmit" value = "Post" form="postForm"/>
        </div>
    );
}

export default PostCreation;