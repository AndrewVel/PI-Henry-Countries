import "./module.css";

import { orderAsdDes, orderPopulation } from "../../redux/actions";
import { AscDsc, population } from "./ListO";

import Select from "./Select.jsx";

const Order = ({ setCurrentPage }) => {
  return (
    <div className="barraFiltros">
      <div>
        <h1 className="filter">Order: </h1>
      </div>
      <div className="continerSelect">
        <div>
          <p className="nameFilter">Alphabetical:</p>
          <p className="nameFilter">Population:</p>
        </div>
        <div>
          <Select
            funtion={orderAsdDes}
            list={AscDsc}
            setCurrentPage={setCurrentPage}
          />
          <Select
            funtion={orderPopulation}
            list={population}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};
export default Order;
