import React from "react";
import { Link } from "react-router-dom";
import "./CardModule.css";

const Card = (props) => {
  return (
    <Link to={`/detail/${props.id}`} className="a">
      <div className="card">
        <img src={props.flags} alt={props.name} className="image" />
        <div className="textBox">
          <h1 className="name">{props.name}</h1>
          <p className="continents">{props.continents}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
