import React, { useState, useEffect } from "react";
import { listDificulty, listSeason } from "./OptionList";
import { useDispatch, useSelector } from "react-redux";
import { createActivity, getCountries } from "../../redux/actions";
import { Link } from "react-router-dom";
import { validation } from "./Validation";
import "./ActivityModule.css";
const Activity = () => {
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
    dispatch(getCountries());
  }, [dispatch, activity]);

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

    alert("Activity created");
  };

  function handleDelete(event) {
    setActivity({
      ...activity,
      countries: activity.countries.filter((contry) => contry !== event),
    });
  }

  return (
    <div className="containerAllCreate">
      <Link to="/home" className="backHome">
        <span>BACK HOME</span>
      </Link>
      <div className="titleFroms">
        <h2>Create your Tourist Activity</h2>
      </div>
      <div className="xxx">
        <div className="containerFrom">
          <form onSubmit={(e) => handleSubmit(e)} name="activityFrom">
            <div>
              {/* //-----------Name */}
              <div className="containerDataSelect">
                <p className="pTitle">Name:</p>
                <br></br>
                <input
                  className="inputData"
                  type="text"
                  placeholder="Name..."
                  name="name"
                  value={activity.name}
                  onChange={(e) => handleChange(e)}
                />
                {error.name ? (
                  <p className="errors">{error.name}</p>
                ) : (
                  <p className="sinError">-</p>
                )}
              </div>
              {/* //-----------------dificulty */}
              <div className="containerDataSelect">
                <p className="pTitle">Difficulty: </p>
                <br></br>
                <select
                  className="inputData"
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
                  <p className="errors">{error.difficulty}</p>
                ) : (
                  <p className="sinError">-</p>
                )}
              </div>

              {/* --------------------------duration */}
              <div className="containerDataSelect">
                <p className="pTitle">Duration: </p>
                <br></br>
                <div>
                  <input
                    className="inputDataDuration"
                    type="number"
                    placeholder="Duration..."
                    name="duration"
                    value={activity.duration}
                    onChange={(e) => handleChange(e)}
                  />
                  <label>hours</label>
                </div>
                {error.duration ? (
                  <p className="errors">{error.duration}</p>
                ) : (
                  <p className="sinError">-</p>
                )}
              </div>
              {/* ----------------------------season */}
              <div className="containerDataSelect">
                <p className="pTitle">Season:</p>
                <br></br>
                <select
                  className="inputData"
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
                  <p className="errors">{error.season}</p>
                ) : (
                  <p className="sinError">-</p>
                )}
              </div>
              {/* /////////////////////////////////////////// */}

              <div className="containerDataSelect">
                <p className="pTitle">Country selections</p>
                <br></br>
                <select
                  className="inputData"
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
                  <p className="errors">{error.countries}</p>
                ) : (
                  <p className="sinError">-</p>
                )}
              </div>

              <button
              className="buttonSubmit"
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
          <div className="ContainerCountrySelectAll">
            <h1 className="titleListContries">List of Selected Countries</h1>

            <div className="ContainerCountrySelect">
              {activity.countries.map((e) => (
                <div className="contrySelect">
                  <img
                    src={countries
                      .filter((ban) => ban.id === e)
                      .map((x) => x.flags)}
                    alt={e}
                  />
                  <p key={e} className="nameContrySelect">
                    {e}
                  </p>
                  <button onClick={() => handleDelete(e)} className="butonX">
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

export default Activity;
