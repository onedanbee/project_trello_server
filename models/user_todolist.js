"use strict";
module.exports = (sequelize, DataTypes) => {
  const user_todolist = sequelize.define(
    "user_todolist",
    {
      T_key: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING(200),
        allowNull: false,
        unique: true
      },
      user_todo: {
        type: DataTypes.STRING(2000),
        allowNull: false
      },
      board_name: {
        type: DataTypes.STRING(2000),
        allowNull: false
      },
      board_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      classMethods: {
        associate: function(models) {
          user_todolist.belongsTo(models.user, {
            foreignKey: "U_key",
            onDelete: "CASCADE"
          });
        }
      }
    }
  );
  return user_todolist;
};
