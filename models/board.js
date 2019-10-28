"use strict";
module.exports = (sequelize, DataTypes) => {
  const board = sequelize.define("board", {
    B_key: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    b_title: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  });
  board.associate = function(models) {
    models.board.hasMany(models.container, {
      foreignKey: "B_key",
      onDelete: "CASCADE"
    });
  };
  return board;
};
