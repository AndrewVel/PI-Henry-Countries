import React, { useState, useEffect } from "react";
import { listDificulty, listSeason } from "./OptionList";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, createActivity } from "../../../../redux/actions";
import { Link } from "react-router-dom";
import { validation } from "./Validation";
import s from "./Create.Module.css";
const CreateActivity = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  //--------------------------------------Control y datos de froms
  const [error, setError] = useState({});
  const [activity, setActivity] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  useEffect(() => {
    setError(validation(activity));
    if (!countries.length) dispatch(getCountries());
  }, [dispatch, activity, countries]);

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setActivity({
      ...activity,
      [property]: value,
    });
    document.activityFrom.difficulty.blur();
  };

  const handleSelect = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    if (value !== "Select countries..") {
      setActivity((estado) => {
        if (property === "countries") {
          return {
            ...estado,
            countries: [...estado.countries, value],
          };
        } else {
          return {
            ...estado,
            [property]: value,
          };
        }
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !activity.name ||
      !activity.difficulty ||
      !activity.duration ||
      !activity.season ||
      !activity.countries.length
    ) {
      return alert("😵 Complete the form correctly before submitting it");
    }
    dispatch(createActivity(activity));
    setActivity({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    });
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
        <h2>Create your Tourist Activity</h2>
      </div>
      <div className={s.xxx}>
        <div className={s.containerFrom}>
          <form onSubmit={(e) => handleSubmit(e)} name="activityFrom">
            <div>
              {/* //-----------Name */}
              <div className={s.containerDataSelect}>
                <p className={s.pTitle}>Name:</p>
                <br></br>
                <input
                  className={s.inputData}
                  type="text"
                  placeholder="Name..."
                  name="name"
                  value={activity.name}
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
                    placeholder="Duration..."
                    name="duration"
                    value={activity.duration}
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
                  value={activity.season}
                >
                  {listSeason.map((op) => (
                    <option value={op}>{op}</option>
                  ))}
                </select>
                {error.season ? (
                  <p className={s.errors}>{error.season}</p>
                ) : (
                  <p className={s.sinError}>-</p>
                )}
              </div>
              {/* /////////////////////////////////////////// */}

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
                  {countries.map((contry) => (
                    <option value={contry.id}>{contry.name}</option>
                  ))}
                </select>
                {error.countries ? (
                  <p className={s.errors}>{error.countries}</p>
                ) : (
                  <p className={s.sinError}>-</p>
                )}
              </div>

              <button
                className={s.buttonSubmit}
                type="submit"
                disabled={Object.keys(error).length === 0 ? false : true}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
        {/* //-----------------------countries */}
        {activity.countries.length ? (
          <div className={s.ContainerCountrySelectAll}>
            <h2 className={s.titleListContries}>List of Selected Countries</h2>

            <div className={s.ContainerCountrySelect}>
              {activity.countries.map((e) => (
                <div className={s.contrySelect}>
                  <img
                    src={countries
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

export default CreateActivity;
