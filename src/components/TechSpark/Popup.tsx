import PostCreation from "./PostCreation";
import "./Popup.css";
import SignIn from "./SignIn";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Popup(props: any) {
  function hideChild() {
    console.log("Popup hidden");
    props.hidePost();
  }
  function displayChild() {
    switch (props.windowType) {
      case 1:
        console.log("Post window clicked");
        return <PostCreation close={hideChild} />;
      case 2:
        console.log("Login clicked");
        return <SignIn close={hideChild} />;
      default:
        console.log("Default rendered");
        return <PostCreation close={hideChild} />;
    }
  }

  return (
    <div className="popup">
      <div className="popup__background" onClick={hideChild} />
      <div className="popup__inner">{displayChild()}</div>
    </div>
  );
}
export default Popup;
