import React from "react";
import Cards from "../Cards/Cards";
import SearchBar from "../SearchBar/SearchBar";
import "./HomeModule.css";

const Home = () => {
  return (
    <div>
      <h1 className="title">COUNTRIES</h1>
      <br></br>
      <SearchBar />
      <Cards />
    </div>
  );
};

export default Home;
