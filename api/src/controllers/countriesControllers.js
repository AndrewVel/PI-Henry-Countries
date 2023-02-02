const { Country, Activity } = require("../db");
const { extractData } = require("./funciones");
const { Op } = require("sequelize");

const getListCountries = async () => {
  try {
    let listCountries = await Country.findAll(); //Trae los datos de la base a una varible

    if (!listCountries.length) {
      // pregunto si la variable esta vacia
      const array = await extractData(); // si esa vacia en un array extraigo los datos de la api al array
      await Country.bulkCreate(array); // luego subo los datos extraidos a la bd
    }

    listCountries = await Country.findAll({
      attributes: ["name", "flags", "continents", "id", "population"],
      include: [
        {
          model: Activity,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });

    return listCountries;
  } catch (error) {
    return error;
  }
};

const countryByName = async (name) => {
  const country = await Country.findAll({
    where: {
      name: { [Op.iLike]: `%${name}%` },
    },
    attributes: ["name", "flags", "continents", "id", "population"],
  });
  if (!country.length) {
    throw Error("No se encontraron coincidencias");
  }
  return country;
};

const countryById = async (id) => {
  const country = await Country.findOne({
    where: { id },
    include: {
      model: Activity,
      through: {
        attributes: [],
      },
    },
  });

  if (!country) throw Error(`La ID:${id} no pertenece a ningun Pais`);

  return country;
};

module.exports = { getListCountries, countryById, countryByName };
