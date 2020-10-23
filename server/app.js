//require("./config/config");
//require("./models/db");


var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.get("/api/users", (req, res, next) => {
    var peers = [{
            firstName: "Irfan",
            lastName: "Mustafa",
            relation: "Father",
            amount: "$1000",

        },
        {
            firstName: "Noman",
            lastName: "Mustafa",
            relation: "Father",
            amount: "$1000",
        }
    ];
    res.status(200).json({
        peers: peers
    });
});

//const rtsIndex = require('./routers/index.router');


//app.use(bodyParser.json());
//app.use(cors());
//app.use('/user', rtsIndex);


//app.listen(process.env.PORT, () => console.log('listening at PORT ' + process.env.PORT));
module.exports = app;