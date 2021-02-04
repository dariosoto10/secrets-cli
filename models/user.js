'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate (models) {
      User.hasMany(models.secrets, {
        sourceKey: 'username',
        foreignKey: 'username',
        as: 'secrets'
      })
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      fullName: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'user',
      underscored: true
    }
  )
  return User
}
