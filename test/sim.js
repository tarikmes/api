const chai      = require('chai'),
      chaiHttp  = require('chai-http'),
      app       = require('../index'),
      should    = chai.should();

chai.use(chaiHttp);

describe('/GET sims', () => {
    it('it should GET all the sims', (done) => {
      chai.request(app)
        .get('/api/sims')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
          done();
        });
    });
});

describe('/POST sim', () => {
    it('it should POST new sims', (done) => {
      let newSim = {
        iccid: 'Mocha iccid',
        status: 'Mocha status'
      }
      chai.request(app)
        .post('/api/sims')
        .send(newSim)
        .end((err, res) => {
            res.should.have.status(200);
          done();
        });
    });
});

