import "./module.css";

import {
  getCountriesByContinents,
  getCountriesByActivities,
} from "../../redux/actions";
import { continents } from "./ListO";

import Select from "./Select.jsx";

const Filter = ({ activities, setCurrentPage }) => {

  let activitiesList = [ "All" ];
  activities.map((activity) => {
    return activitiesList.push(activity.name);
  });

  return (
    <div className="barraFiltros">
      <div>
        <h1 className="filter">Filter: </h1>
      </div>
      <div className="continerSelect">
        <div>
          <p className="nameFilter">Activities:</p>
          <p className="nameFilter">Continents:</p>
        </div>
        <div>
          <Select
            funtion={getCountriesByActivities}
            list={activitiesList}
            setCurrentPage={setCurrentPage}
          />
          <Select
            funtion={getCountriesByContinents}
            list={continents}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};
export default Filter;
