import React from "react";
import { Link } from "react-router-dom";
import "./InitialPageModule.css";
import andrew from "../../images/AndrewDev.png";

const initialPage = () => {
  return (
    <div className="contentsStart">
      <div className="textoTodoLanding">
        <div className="glassLanding">
          <h1 className="titlelandigpage">Welcome to Individual Project</h1>
          <p className="textolandig">
            Welcome to my countries PI. Here you can explore the geographical
            diversity. You can start by searching for a particular country
            through our search engine, or browse the full list of countries.
            Each country has a detailed file with relevant information, such as
            its continent, capital, sub-region, area and population.
          </p>
          <p className="textolandig">
            Also, if you have an activity or experience that you have enjoyed on
            your trips and want to share with other users, you can add it to our
            system and enrich the travel experience of the community. We invite
            you to explore, learn and share on this country website. Have a good
            trip!
          </p>
        </div>
        <Link to="/home" className="start">
          <span>START</span>
        </Link>
      </div>
      <div className="andrew">
        <a href="https://www.linkedin.com/in/andres-velata/">
          <img src={andrew} alt="Andrew" className="andrew"></img>
        </a>
      </div>
    </div>
  );
};

export default initialPage;
