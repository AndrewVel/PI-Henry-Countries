import "./module.css";

import { orderAsdDes, orderPopulation } from "../../redux/actions";
import { AscDsc, population } from "./ListO";

import Select from "./Select.jsx";

const Order = ({ setCurrentPage }) => {
  return (
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
  );
};
export default Order;
