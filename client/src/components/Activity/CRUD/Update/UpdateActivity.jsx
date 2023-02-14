import React, { useState, useEffect } from "react";
import { listDificulty, listSeason } from "./OptionList";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import { validation } from "./Validation";
import s from "./Update.Module.css";
//---------------------------------------------------------------------------------
import {
  getCountries,
  getActivityById,
  updateActivity,
} from "../../../../redux/actions";
import { handleDelete, handleSelect, handleChange } from "./funcion";
//---------------------------------------------------------------------------------

const UpdateActivity = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const countries2 = useSelector((state) => state.countries);
  const [error, setError] = useState({});
  const [activity, setActivity] = useState({});
  const activitiUpdate = useSelector((state) => state.activityUpdate);

  useEffect(() => {
    dispatch(getActivityById(id));
  }, [dispatch, id]);

  useEffect(() => {
    setError(validation(activity));
    if (countries2 && Object.entries(countries2).length !== 250) {
      dispatch(getCountries());
    }
  }, [countries2, activity, dispatch]);

  useEffect(() => {
    if (
      Object.entries(activitiUpdate).length !== 0 &&
      Object.entries(countries2).length !== 0
    ) {
      setActivity({
        id: activitiUpdate.id,
        name: activitiUpdate.name,
        difficulty: activitiUpdate.difficulty,
        duration: activitiUpdate.duration,
        season: activitiUpdate.season,
        countries: activitiUpdate.countries.map((xxy) => xxy.id),
      });
    }
  }, [activitiUpdate, countries2]);

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !activity.difficulty ||
      !activity.duration ||
      !activity.season ||
      !activity.countries.length
    ) {
      return alert("😵 Complete the form correctly before submitting it");
    }

    dispatch(updateActivity(activity));
    history.push("/activity");
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
          <form
            onSubmit={(e) =>
              handleSubmit(e, activity, dispatch, updateActivity)
            }
            name="activityFrom"
          >
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
                  value={activity.name}
                  onChange={(e) =>
                    handleChange(e, activitiUpdate, setActivity, activity)
                  }
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
                  placeholder={activitiUpdate.difficulty}
                  onChange={(e) =>
                    handleChange(e, activitiUpdate, setActivity, activity)
                  }
                  value={activity.difficulty}
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
                    placeholder={activitiUpdate.duration}
                    name="duration"
                    value={activity.duration}
                    onChange={(e) =>
                      handleChange(e, activitiUpdate, setActivity, activity)
                    }
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
                  placeholder={activitiUpdate.season}
                  onChange={(e) =>
                    handleChange(e, activitiUpdate, setActivity, activity)
                  }
                  value={activity.season}
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
              <div className={s.containerDataSelect}>
                <p className={s.pTitle}>Country selections</p>
                <br></br>
                <select
                  className={s.inputData}
                  name="countries"
                  id="countries"
                  onChange={(e) => handleSelect(e, setActivity)}
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
              {/* ////Boton--------------------------------------      */}
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
        {activity.hasOwnProperty("countries") ? (
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
                  <button
                    onClick={() => handleDelete(e, setActivity, activity)}
                    className={s.butonX}
                  >
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
