const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  //defino modelo
  sequelize.define(
    "activity",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: "activity",
      },
      difficulty: {
        type: DataTypes.ENUM("1", "2", "3", "4", "5"),
        allowNull: false,
      },
      duration: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      season: {
        type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"),
        allowNull: false,
        unique: "activity",
      },
    },
    { timestamps: false }
  );
};
