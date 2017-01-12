module.exports = function (sequelize, DataTypes) {
  var Sim = sequelize.define("Sim", {
    iccid:  DataTypes.STRING,
    status: DataTypes.STRING
  });
  return Sim
};



