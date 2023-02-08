import React, { useState, useEffect } from "react";
import { listDificulty, listSeason } from "./OptionList";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  getActivityById,
  updateActivity,
} from "../../../../redux/actions";
import { Link, useParams, useHistory } from "react-router-dom";
import { validation } from "./Validation";
import s from "./Update.Module.css";

const UpdateActivity = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const countries2 = useSelector((state) => state.countries);
  const activitiUpdate = useSelector((state) => state.activityUpdate);
  //--------------------------------------Control y datos de froms

  const [error, setError] = useState({});
  const [activity, setActivity] = useState({
    id: activitiUpdate.id,
    name: activitiUpdate.name,
    difficulty: activitiUpdate.difficulty,
    duration: activitiUpdate.duration,
    season: activitiUpdate.season,
    countries: [],
  });

  useEffect(() => {
    if (!activitiUpdate.length) {
      dispatch(getActivityById(id));
    }
    setError(validation(activity));
    if (!countries2.length) {
      dispatch(getCountries());
    }
  }, [activitiUpdate.length, activity, countries2.length, dispatch, id]);

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    const x = activitiUpdate.countries.map((xxy) => xxy.id);
    setActivity({
      ...activity,
      [property]: value,
      countries: x,
    });
    document.activityFrom.difficulty.blur();
  };

  const handleSelect = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    if (value !== "Select countries..") {
      setActivity((activity) => {
        if (property === "countries") {
          return {
            ...activity,
            countries: [...activity.countries, value],
          };
        } else {
          return {
            ...activity,
            [property]: value,
          };
        }
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !activity.difficulty ||
      !activity.duration ||
      !activity.season ||
      !activity.countries.length
    ) {
      return alert("😵 Complete the form correctly before submitting it");
    }
    console.log(activity);
    dispatch(updateActivity(activity));
    history.push("/activity");
  };

  function handleDelete(event) {
    setActivity({
      ...activity,
      countries: activity.countries.filter((contry) => contry !== event),
    });
  }

  return (
    <div className={s.containerAllCreate}>
      <Link to="/activity" className="backHome">
        <span>⫷</span>
      </Link>
      <div className={s.titleFroms}>
        <h2>Update the Activity</h2>
      </div>
      <div className={s.xxx}>
        <div className={s.containerFrom}>
          <form onSubmit={(e) => handleSubmit(e)} name="activityFrom">
            <div>
              {/* //-----------Name */}
              <div className={s.containerDataSelect}>
                <p className={s.pTitleName}>
                  Name:
                  <div className={s.mesageName}>can not change</div>
                </p>
                <br></br>
                <input
                  disabled={true}
                  className={s.inputData}
                  type="text"
                  placeholder="Name..."
                  name="name"
                  value={activitiUpdate.name}
                  onChange={(e) => handleChange(e)}
                />
                {error.name ? (
                  <p className={s.errors}>{error.name}</p>
                ) : (
                  <p className={s.sinError}>-</p>
                )}
              </div>
              {/* //-----------------dificulty */}
              <div className={s.containerDataSelect}>
                <p className={s.pTitle}>Difficulty: </p>
                <br></br>
                <select
                  className={s.inputData}
                  id="difficulty"
                  name="difficulty"
                  onChange={(e) => handleChange(e)}
                  value={
                    !activity.difficulty
                      ? activitiUpdate.difficulty
                      : activity.difficulty
                  }
                >
                  {listDificulty.map((op) => (
                    <option key={op} value={op}>
                      {op}
                    </option>
                  ))}
                </select>
                {error.difficulty ? (
                  <p className={s.errors}>{error.difficulty}</p>
                ) : (
                  <p className={s.sinError}>-</p>
                )}
              </div>

              {/* --------------------------duration */}
              <div className={s.containerDataSelect}>
                <p className={s.pTitle}>Duration: </p>
                <br></br>
                <div>
                  <input
                    className={s.inputDataDuration}
                    type="number"
                    placeholder="Duration..."
                    name="duration"
                    value={
                      !activity.duration
                        ? activitiUpdate.duration
                        : activity.duration
                    }
                    onChange={(e) => handleChange(e)}
                  />
                  <label>hours</label>
                </div>
                {error.duration ? (
                  <p className={s.errors}>{error.duration}</p>
                ) : (
                  <p className={s.sinError}>-</p>
                )}
              </div>
              {/* ----------------------------season */}
              <div className={s.containerDataSelect}>
                <p className={s.pTitle}>Season:</p>
                <br></br>
                <select
                  className={s.inputData}
                  id="season"
                  name="season"
                  onChange={(e) => handleChange(e)}
                  value={
                    !activity.season ? activitiUpdate.season : activity.season
                  }
                >
                  {listSeason.map((op) => (
                    <option value={op} key={op}>
                      {op}
                    </option>
                  ))}
                </select>
                {error.season ? (
                  <p className={s.errors}>{error.season}</p>
                ) : (
                  <p className={s.sinError}>-</p>
                )}
              </div>
              {/* /////////////////////////////////////////// */}
              {activity.countries.length ? (
                <div className={s.containerDataSelect}>
                  <p className={s.pTitle}>Country selections</p>
                  <br></br>
                  <select
                    className={s.inputData}
                    name="countries"
                    id="countries"
                    onChange={(e) => handleSelect(e)}
                  >
                    <option>Select countries..</option>
                    {countries2.map((contry) => (
                      <option value={contry.id} key={contry.id}>
                        {contry.name}
                      </option>
                    ))}
                  </select>
                  {error.countries ? (
                    <p className={s.errors}>{error.countries}</p>
                  ) : (
                    <p className={s.sinError}>-</p>
                  )}
                </div>
              ) : (
                <></>
              )}

              <button
                className={s.buttonSubmit}
                type="submit"
                disabled={Object.keys(error).length === 0 ? false : true}
                onClick={(e) => handleSubmit(e)}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
        {/* //-----------------------countries */}
        {activity.countries.length ? (
          <div className={s.ContainerCountrySelectAll}>
            <h1 className={s.titleListContries}>List of Selected Countries</h1>

            <div className={s.ContainerCountrySelect}>
              {activity.countries.map((e) => (
                <div className={s.contrySelect} key={e}>
                  <img
                    src={countries2
                      .filter((ban) => ban.id === e)
                      .map((x) => x.flags)}
                    alt={e}
                  />
                  <p key={e} className={s.nameContrySelect}>
                    {e}
                  </p>
                  <button onClick={() => handleDelete(e)} className={s.butonX}>
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default UpdateActivity;
