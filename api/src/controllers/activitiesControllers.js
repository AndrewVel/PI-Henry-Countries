const { Activity } = require("../db");

const createActivity = async (
  name,
  difficulty,
  duration,
  season,
  countries
) => {
  if (!name || !difficulty || !duration || !season || !countries)
    throw Error("Ingrese todos los campos");
  try {
    const activity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    await activity.addCountries(countries);
    return { activity };
  } catch (error) {
    return error;
  }
};

const getListActivities = async () => {
  try {
    let listActivities = await Activity.findAll();
    return listActivities;
  } catch (error) {
    return error;
  }
};

module.exports = { createActivity, getListActivities };
