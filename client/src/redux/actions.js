import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";
export const GET_COUNTRIES_BY_CONTINENTS = "GET_COUNTRIES_BY_CONTINENTS";
export const ORDER_ASC_DES = "ORDER_ASC_DES";
export const ORDER_POPULATION = "ORDER_POPULATION";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_COUNTRIES_BY_ACTIVITIES = "GET_COUNTRIES_BY_ACTIVITIES";
export const GET_COUNTRIES_BY_ID = "GET_COUNTRIES_BY_ID";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";

//Traer a todos los paises
export const getCountries = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/countries")
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_COUNTRIES, payload: data }));
  };
};
//Traer pais por nombre
export const getCountriesByName = (name) => {
  return function (dispatch) {
    try {
      fetch(`http://localhost:3001/countries?name=${name}`)
        .then((response) => response.json())
        .then((data) =>
          dispatch({ type: GET_COUNTRIES_BY_NAME, payload: data })
        );
    } catch (error) {
      return alert(error);
    }
  };
};

export const getCountriesByContinents = (continent) => {
  return {
    type: GET_COUNTRIES_BY_CONTINENTS,
    payload: continent,
  };
};

export const getCountriesByActivities = (activity) => {
  return {
    type: GET_COUNTRIES_BY_ACTIVITIES,
    payload: activity,
  };
};

export const orderAsdDes = (order) => {
  return {
    type: ORDER_ASC_DES,
    payload: order,
  };
};
export const orderPopulation = (order) => {
  return {
    type: ORDER_POPULATION,
    payload: order,
  };
};

export const getActivities = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/activities")
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_ACTIVITIES, payload: data }));
  };
};

export const getCountryById = (id) => {
  return function (dispatch) {
    fetch(`http://localhost:3001/countries/${id}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_COUNTRIES_BY_ID, payload: data }));
  };
};

export const createActivity = (activity) => {
  return async function (dispatch) {
    const response = await axios.post(
      "http://localhost:3001/activities",
      activity
    );
    return dispatch({
      type: CREATE_ACTIVITY,
      payload: response,
    });
  };
};
