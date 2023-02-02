import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter and Order/Filter";
import Order from "../Filter and Order/Order";
import Me from "../About/About";
import { Link } from "react-router-dom";
import "./BarModule.css";

const Bar = ({ activities, setCurrentPage }) => {
  return (
    <div>
      <div className="normalBar">
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
        </div>
        <Link to="/activity/" className="goActivity">
          <span>CRUD ACTIVITY</span>
        </Link>
      </div>

      <div className="miniBar"></div>
    </div>
  );
};

export default Bar;
