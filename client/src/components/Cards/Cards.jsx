import React from "react";
import Card from "../Card/Card";
import "./CardsModule.css";

const Cards = ({ countries }) => {
  return (
    <div className="container">
      {countries.map((country) => {
        return (
          <Card
            name={country.name}
            flags={country.flags}
            continents={country.continents}
            key={country.id}
            id={country.id}
          />
        );
      })}
    </div>
  );
};

export default Cards;
