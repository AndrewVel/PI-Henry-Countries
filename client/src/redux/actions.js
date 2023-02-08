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
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";
export const UPDATE_ACTIVITY = "UPDATE_ACTIVITY";
export const GET_ACTIVITY_BY_ID = " GET_ACTIVITY_BY_ID";

//Traer a todos los paises

export const getCountries = () => {
  return function (dispatch) {
    fetch("https://pi-countries-andrewvel.up.railway.app/countries/")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: GET_COUNTRIES,
          payload: data,
        });
      });
  };
};

//Traer pais por nombre
export const getCountriesByName = (name) => {
  return function (dispatch) {
    fetch(
      `https://pi-countries-andrewvel.up.railway.app/countries?name=${name}`
    )
      .then((response) => response.json())
      .then((data) => {
        !data.error
          ? dispatch({ type: GET_COUNTRIES_BY_NAME, payload: data })
          : alert(data.error);
      });
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
    fetch("https://pi-countries-andrewvel.up.railway.app/activities")
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_ACTIVITIES, payload: data }));
  };
};

export const getCountryById = (id) => {
  return function (dispatch) {
    fetch(`https://pi-countries-andrewvel.up.railway.app/countries/${id}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_COUNTRIES_BY_ID, payload: data }));
  };
};

export const createActivity = (activity) => {
  return async function (dispatch) {
    const response = await axios.post(
      "https://pi-countries-andrewvel.up.railway.app/activities",
      activity
    );
    alert(response.data.message);
    return dispatch({
      type: CREATE_ACTIVITY,
      payload: response,
    });
  };
};

export const deleteActivity = (id) => {
  return async function (dispatch) {
    const response = await axios.delete(
      `https://pi-countries-andrewvel.up.railway.app/activities/${id}`
    );
    console.log(response.data);
    return dispatch({
      type: DELETE_ACTIVITY,
      payload: response.data,
    });
  };
};

export const updateActivity = (activity) => {
  return async function (dispatch) {
    const response = await axios.put(
      `https://pi-countries-andrewvel.up.railway.app/activities/${activity.id}`,
      activity
    );
    console.log(response.data);
    alert(response.data);
    return dispatch({
      type: UPDATE_ACTIVITY,
    });
  };
};

export const getActivityById = (id) => {
  return function (dispatch) {
    fetch(`https://pi-countries-andrewvel.up.railway.app/activities/${id}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: GET_ACTIVITY_BY_ID, payload: data });
      });
  };
};
