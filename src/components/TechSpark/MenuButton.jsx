import "./MenuButton.css";

function MenuButton(props) {
  function buttonClicked() {
    props.showPost();
    props.showSignIn();
  }
  return (
    <a href={props.link}>
      <button className="MenuButton" onClick={buttonClicked}>
        {props.text}
      </button>
    </a>
  );
}
export default MenuButton;
