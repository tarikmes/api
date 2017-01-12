const express    = require('express'),
      router     = express.Router(),
      simsRouter = require('../routes/sims');
      secureSimsRouter = require('../routes/secureSims'),
      authenticateRouter = require('../routes/authenticate');

router.use('/sims', simsRouter);
router.use('/secure/sims', secureSimsRouter);
router.use('/authenticate', authenticateRouter);

module.exports = router;

process.env.SECRET_KEY = 'test_key';
