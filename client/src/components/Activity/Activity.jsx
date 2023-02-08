import { Link } from "react-router-dom";
import ListActivity from "./CRUD/List/ListActivity";
import s from "./Activity.Module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getActivities } from "../../redux/actions";

const Activity = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);
  return (
    <div>
      <div>
        <Link to="/home" className={s.backHomeCrud}>
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
        <ListActivity activities={activities} />
      </div>
    </div>
  );
};

export default Activity;
