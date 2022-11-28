import "./Card.css";

function CardBack(props) {
  return (
    <div className="card" onClick={props.onClick}>
      <div className="card-image">
        <img
          src={require("./../assets/".concat(props.img))}
          alt={props.title}
        ></img>
      </div>
      <div className="card-content-back">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default CardBack;
