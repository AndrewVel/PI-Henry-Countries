import React from "react";
import "./CardModule.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.flags} alt={props.name} className="image" />
      <div className="textBox">
        <h1 className="name">{props.name}</h1>
        <p className="continents">{props.continents}</p>
      </div>
    </div>
  );
};

export default Card;
