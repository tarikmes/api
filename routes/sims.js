const express        = require('express'),
      simsRouter     = express.Router(),
      simsController = require('../controllers/sims');

simsRouter.route('/').get(simsController.get)
simsRouter.route('/').post(simsController.create)

module.exports = simsRouter;
