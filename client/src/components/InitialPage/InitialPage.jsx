import React from "react";
import { Link } from "react-router-dom";
import "./InitialPageModule.css";

const initialPage = () => {
  return (
    <div className="contentsStart">
      <Link to="/home" className="start">
        <span>COMENZAR</span>
      </Link>
    </div>
  );
};

export default initialPage;
