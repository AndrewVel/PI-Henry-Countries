import { useDispatch, useSelector } from "react-redux";
import { getActivities, deleteActivity } from "../../../../redux/actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import s from "./List.Module.css";
const ListActivity = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);

  const deleteAct = (id, name, countries) => {
    if (
      window.confirm(
        `Activity ${name} will be deleted to delete also for countries: ${countries.map(
          (con) => con.name
        )} do you want to continue?`
      )
    )
      return dispatch(deleteActivity(id));
  };

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div className={s.containerAll}>
      <div className={s.table}>
        <div className={s.containerListActivityTitle}>
          <div className={s.TitleName}>
            <p className={s.pTitle}>Name</p>
          </div>
          <div className={s.Title}>
            <p className={s.pTitle}>Difficulty</p>
          </div>
          <div className={s.Title}>
            <p className={s.pTitle}>Duration</p>
          </div>
          <div className={s.Title}>
            <p className={s.pTitle}>Season</p>
          </div>
          <div className={s.Title}>
            <p className={s.pTitle}>Option</p>
          </div>
        </div>
        {activities.map((activity) => (
          <div className={s.containerListActivity} key={activity.id}>
            <div className={s.listAName}>
              <p className={s.pDatoName}>{activity.name}</p>
            </div>
            <div className={s.listA}>
              <p className={s.pDato}>{activity.difficulty}</p>
            </div>
            <div className={s.listA}>
              <p className={s.pDato}>{activity.duration}</p>
            </div>
            <div className={s.listA}>
              <p className={s.pDato}>{activity.season}</p>
            </div>
            <div className={s.listA}>
              <button
                className={s.delete}
                onClick={() =>
                  deleteAct(activity.id, activity.name, activity.countries)
                }
              >
                🗑️
              </button>
              <Link to={`/activity/update/${activity.id}`}>
                <button className={s.edit}>✏️</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListActivity;
