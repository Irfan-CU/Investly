require("./config/config");
require("./models/db");


var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();


const rtsIndex = require('./routers/index.router');

app.use('/user', (req, res, next) => {

});

//app.use(bodyParser.json());
//app.use(cors());
//app.use('/user', rtsIndex);


//app.listen(process.env.PORT, () => console.log('listening at PORT ' + process.env.PORT));
module.exports = app;