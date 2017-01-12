const models     = require('../models'),
      simService = require('../services/simService');

module.exports = {
    get: function (req, res) {
      simService.get(req, res);
    },
    create: function(req, res){
      simService.create(req, res);
    }
}
