import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter and Order/Filter";
import Order from "../Filter and Order/Order";
import { Link } from "react-router-dom";
import "./BarModule.css";

const Bar = ({ activities, setCurrentPage }) => {
  return (
    <div>
      <div className="normalBar">
        <span className="btn-select"></span>
        <div className="containerSearchBarx">
          <SearchBar setCurrentPage={setCurrentPage} />
        </div>
        <div className="opctionMenu">
          <p className="pTitleMenu">Filter by</p>
          <div className="submenu">
            <Filter activities={activities} setCurrentPage={setCurrentPage} />
          </div>
        </div>

        <div className="opctionMenu">
          <p className="pTitleMenu">Order by</p>
          <div className="submenu">
            <Order activities={activities} setCurrentPage={setCurrentPage} />
          </div>
        </div>

        <div className="opctionMenu">
          <a className="pTitleMenu" href="/me">
            About me
          </a>
          <div className="submenu"></div>
          <br></br>
        </div>
        <Link to="/activity/" className="goActivity">
          <span>ADD ACTIVITY</span>
        </Link>
        <br></br>
      </div>
    </div>
  );
};

export default Bar;
