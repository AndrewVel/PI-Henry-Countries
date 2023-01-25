import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";
import "./BarModule.css";

const Bar = ({ activities }) => {
  return (
    <div className="bar">
      <SearchBar />
      <Filter activities={activities} />
    </div>
  );
};

export default Bar;
