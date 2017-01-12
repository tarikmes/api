const express                = require('express');
      authenticateRouter     = express.Router();
      authenticateController = require('../controllers/authenticate');

authenticateRouter.route('/').get(authenticateController.authenticate)

module.exports = authenticateRouter;
