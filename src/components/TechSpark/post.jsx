/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, View } from "react";
import "./post.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { IconContext } from "react-icons";

class EmailButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    window.location.href = `mailto:${this.props.email}`;
  }
  render() {
    return (
      <button onClick={this.onClick} className="emailButton">
        <IconContext.Provider value={{ size: "1.5em" }}>
          <AiOutlineMail />
        </IconContext.Provider>
      </button>
    );
  }
}

function PostContainer(props) {
  const [active, setActive] = useState(false);

  function toggle() {
    setActive(!active);
  }

  return (
    <div
      className={
        "expandableForumPost" + (active ? " expandableForumPost--active" : "")
      }
    >
      {props.title}
      <p className="author">{props.author}</p>
      <p className="date">{props.date}</p>
      <hr></hr>
      <p className="description">{props.description}</p>
      <button
        className={
          "forumPostButton" + (active ? " forumPostButton--active" : "")
        }
        type="button"
        onClick={toggle}
      >
        <IconContext.Provider value={{ size: "1.5em" }}>
          <MdKeyboardArrowDown />
        </IconContext.Provider>
      </button>
      <EmailButton></EmailButton>
    </div>
  );
}

export default PostContainer;
