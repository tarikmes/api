'use strict';
module.exports = function(sequelize, DataTypes) {
  var Sim = sequelize.define('Sim', {
    iccid: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Sim;
};