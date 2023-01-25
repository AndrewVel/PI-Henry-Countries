import React from "react";

import Card from "../Card/Card";
import "./CardsModule.css";

const Cards = ({ countries }) => {
  return (
    <div className="container">
      {!countries.length ? (
        <div>
          <h1 className="countryFail">No Matches Found</h1>
        </div>
      ) : (
        countries.map((country) => {
          return (
            <Card
              name={country.name}
              flags={country.flags}
              continents={country.continents}
              key={country.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Cards;
