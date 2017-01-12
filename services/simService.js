const models =  require('../models');

module.exports = {
    get: function (req, res) {
      console.log(models.Sim);
    models.Sim.findAll().then(function (sims) {
       res.status(200).send(sims);
      });
    },
    create: function(req, res){
    let newSim = {
      iccid: req.body.iccid,
      status: req.body.status
    }
    models.Sim.create(newSim).then(function () {
      res.status(200).send('Sim created');
      });
    }
}
