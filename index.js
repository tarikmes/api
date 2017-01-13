const bodyParser = require('body-parser'),
      express    = require("express"),
      routes     = require('./routes');

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use('/api', routes);

let port = process.env.PORT || 3001;
app.listen(port, function(){
  console.log('Listening to port');
});

module.exports = app

/*
{
  "development": {
    "username": "test",
    "password": "test",
    "database": "attdb",
    "host": "localhost",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}


*/


