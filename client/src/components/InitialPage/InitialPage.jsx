import React from "react";
import { Link } from "react-router-dom";
import "./InitialPageModule.css";

const initialPage = () => {
  return (
    <div className="container2">
      <Link to="/home">
        <span>COMENZAR</span>
      </Link>
    </div>
  );
};

export default initialPage;
