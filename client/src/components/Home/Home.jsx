import React from "react";
import Cards from "../Cards/Cards";
import Bar from "../Bar/Bar";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getActivities } from "../../redux/actions";

// import SearchBar from "../SearchBar/SearchBar";
import "./HomeModule.css";
import Pagination from "../Pagination/Pagination";
import { useState } from "react";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  const countries = useSelector((state) => state.countries);
  const allCountries = useSelector((state) => state.allCountries);
  const activities = useSelector((state) => state.activities);

  const [currentPage, setCurrentPage] = useState(1);

  const [perPage, setPerPage] = useState(9);
  const pagination = (pageNumber) => {
    pageNumber === 1 ? setPerPage(9) : setPerPage(10);
    setCurrentPage(pageNumber);
  };

  const indexOfLastCountry =
    currentPage === 1 ? currentPage * perPage : currentPage * perPage - 1;

  const indexOfFirstCountry = indexOfLastCountry - perPage;

  const currentCountries = countries.length
    ? countries.slice(indexOfFirstCountry, indexOfLastCountry)
    : allCountries;

  return (
    <div>
      <Bar activities={activities} setCurrentPage={setCurrentPage} />
      <h1 className="title">COUNTRIES</h1>

      {!countries.length ? (
        <div>
          <h1 className="countryFail">No Matches Found</h1>
        </div>
      ) : (
        <div>
          <Pagination
            countries={countries.length}
            pagination={pagination}
            perPage={perPage}
          />
          <Cards countries={currentCountries} />
        </div>
      )}
    </div>
  );
};

export default Home;
