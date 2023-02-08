const { Activity, Country } = require("../db");

const createActivity = async (
  name,
  difficulty,
  duration,
  season,
  countries
) => {
  if (!name || !difficulty || !duration || !season || !countries.length)
    throw Error("Ingrese todos los campos");

  if (difficulty > 5 || difficulty < 1)
    throw Error("La dificultad debe ser entre 1 y 5");
  if (
    season !== "Summer" &&
    season !== "Autumn" &&
    season !== "Winter" &&
    season !== "Spring"
  )
    throw Error("La temporada debe ser una valida");

  if (!countries.length) throw Error("Debe tener almenos un Pais vinculado");

  try {
    const [activity, created] = await Activity.findOrCreate({
      where: { name: name },
      defaults: {
        difficulty,
        duration,
        season,
      },
    });
    await activity.addCountries(countries);
    let response = {};
    created
      ? (response = {
          message: `La actividad ${name} creada satisfactoriamente`,
          ...activity.dataValues,
        })
      : (response = { message: `La actividad ${name} ya existe` });
    return response;
  } catch (error) {
    return error;
  }
};

const getListActivities = async () => {
  try {
    let listActivities = await Activity.findAll({
      include: [
        {
          model: Country,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });
    return listActivities;
  } catch (error) {
    return error;
  }
};

const deleteActivity = async (id) => {
  try {
    const activityDelete = await Activity.findByPk(id);
    const confir = await Activity.destroy({ where: { id } });
    let message = "";
    confir === 1
      ? (message = `La actividad ${activityDelete.dataValues.name} se elimino correctamente`)
      : (message = `La actividad ${activityDelete.dataValues.name} no se encontro`);
    
      let listActivities = await Activity.findAll({
      include: [
        {
          model: Country,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });
    return listActivities;
  } catch (error) {
    return error;
  }
};

const updateActivity = async (
  id,
  name,
  difficulty,
  duration,
  season,
  countries
) => {
  if (!difficulty || !duration || !season || !countries.length)
    throw Error("Ingrese todos los campos");

  if (difficulty > 5 || difficulty < 1)
    throw Error("La dificultad debe ser entre 1 y 5");

  if (!countries.length) throw Error("Debe tener almenos un Pais vinculado");

  try {
    const actyUpdate = await Activity.findByPk(id);
    await actyUpdate.update(
      { difficulty, duration, season },
      { where: { id } }
    );

    const countriesBD = await Country.findAll({
      where: {
        id: countries,
      },
    });
    await actyUpdate.setCountries(countriesBD);
    return `La actividad ${name} se actualizo correctamente`;
  } catch (error) {
    return error;
  }
};

const activityById = async (id) => {
  const activity = await Activity.findOne({
    where: { id },
    include: {
      model: Country,
      attributes: ["id"],
      through: {
        attributes: [],
      },
    },
  });
  if (!activity) throw Error(`La ID:${id} no pertenece a ningun Pais`);

  return activity;
};

module.exports = {
  createActivity,
  getListActivities,
  deleteActivity,
  updateActivity,
  activityById,
};
