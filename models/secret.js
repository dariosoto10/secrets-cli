'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Secret extends Model {
    static associate (models) {
      Secret.belongsTo(models.user, {
        targetKey: 'username',
        foreignKey: 'username',
        as: 'user'
      })
    }
  }
  Secret.init(
    {
      username: DataTypes.STRING,
      name: DataTypes.STRING,
      value: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'secrets',
      underscored: true
    }
  )

  return Secret
}
