"use strict";
module.exports = (sequelize, DataTypes) => {
  const container = sequelize.define("container", {
    C_key: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    c_title: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  });
  container.associate = function(models) {
    models.container.hasMany(models.card, {
      foreignKey: "C_key",
      onDelete: "CASCADE"
    });
  };
  return container;
};
