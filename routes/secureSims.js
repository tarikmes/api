const express        = require('express'),
      simsRouter     = express.Router(),
      simsController = require('../controllers/sims'),
      jwt            = require('jsonwebtoken');

simsRouter.use(function(req, res, next){
  let token = req.body.token || req.headers['token'];
  if (token){
    jwt.verify(token, process.env.SECRET_KEY, function(err, decode){
      if (err){
        res.status(500).send('Invalid token')
      } else {
        next();
      }
    })
  } else {
    res.send('Please provide a token');
  }
});



simsRouter.route('/').get(simsController.get)
simsRouter.route('/').post(simsController.create)

module.exports = simsRouter;
