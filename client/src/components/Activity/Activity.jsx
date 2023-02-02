import { Link } from "react-router-dom";
import ListActivity from "./CRUD/List/ListActivity";
import s from "./Activity.Module.css";
const Activity = () => {
  return (
    <div>
      <div>
        <Link to="/home" className="backHome">
          <span>BACK HOME</span>
        </Link>
      </div>
      <div>
        <Link to="/activity/create" className={s.goCreateActivity}>
          <span>CREATE ACTIVITY</span>
        </Link>
      </div>
      <h1 className={s.title}>CRUD ACTIVITIES</h1>
      <div>
        <ListActivity />
      </div>
    </div>
  );
};

export default Activity;
