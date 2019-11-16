"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    U_key: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });
  user.associate = function(models) {
    models.user.hasMany(models.board, {
      foreignKey: "U_key",
      onDelete: "CASCADE"
    });
  };
  return user;
};
