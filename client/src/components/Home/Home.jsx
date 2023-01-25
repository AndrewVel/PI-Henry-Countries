import React from "react";
import Cards from "../Cards/Cards";
import Bar from "../Bar/Bar";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCountries, getActivities } from "../../redux/actions";

// import SearchBar from "../SearchBar/SearchBar";
import "./HomeModule.css";

const Home = () => {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countries);
  const activities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div>
      <h1 className="title">COUNTRIES</h1>
      <Bar activities={activities} />
      <Cards countries={countries} />
    </div>
  );
};

export default Home;
