import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter and Order/Filter";
import Order from "../Filter and Order/Order";
import "./BarModule.css";

const Bar = ({ activities, setCurrentPage }) => {
  return (
    <div className="bar">
      <Filter activities={activities} setCurrentPage={setCurrentPage} />
      <SearchBar setCurrentPage={setCurrentPage} />
      <Order activities={activities} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Bar;
