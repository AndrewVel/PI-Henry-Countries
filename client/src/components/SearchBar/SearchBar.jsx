import "./SearchBarModules.css";
import { useDispatch } from "react-redux";
import { getCountriesByName } from "../../redux/actions";
import { Link } from "react-router-dom";

const SearchBar = (props) => {
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    dispatch(getCountriesByName(newQuery));
    props.setCurrentPage(1);
  };

  return (
    <div>
      <h1 className="title">COUNTRIES</h1>
      <input
        className="barra"
        placeholder="Write the country you are looking for"
        type="search"
        onChange={handleInputChange}
      />
      <div>
        <Link to="/activity" className="goActivity">
          <span>CREATE ACTIVITY</span>
        </Link>
      </div>
    </div>
  );
};
export default SearchBar;
