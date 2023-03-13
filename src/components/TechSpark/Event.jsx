import "./Event.css";

function Event(props) {
  return (
    <div className="styling">
      <a className="eventLink" href={props.link}>
        <img className="eventImg" src={props.img} />
        <h1 id="eventTitle">{props.name}</h1>
      </a>

      <h2 className="alignment">{props.date}</h2>
      <p className="alignment">{props.description}</p>
    </div>
  );
}

export default Event;
