"use strict";
module.exports = (sequelize, DataTypes) => {
  const card = sequelize.define("card", {
    card_key: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    card_text: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  });
  return card;
};
