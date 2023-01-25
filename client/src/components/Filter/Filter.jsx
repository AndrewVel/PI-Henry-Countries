import "./module.css";

import {
  getCountriesByContinents,
  orderAsdDes,
  orderPopulation,
  getCountriesByActivities,
} from "../../redux/actions";
import { continents, AscDsc, population } from "./Order";

import Select from "./Select.jsx";

const Filter = ({ activities }) => {
  let activitiesList = [{ name: "All" }];
  activities.map((activity) => {
    return activitiesList.push({ name: activity.name });
  });

  return (
    <div className="barraFiltros">
      <p className="filter">Filters selection ↦</p>
      <p className="nameFilter">Continents:</p>
      <Select funtion={getCountriesByContinents} list={continents} />
      <p className="nameFilter">Alphabetical:</p>
      <Select funtion={orderAsdDes} list={AscDsc} />
      <p className="nameFilter">Population:</p>
      <Select funtion={orderPopulation} list={population} />
      <p className="nameFilter">Activities:</p>
      <Select funtion={getCountriesByActivities} list={activitiesList} />
    </div>
  );
};
export default Filter;
