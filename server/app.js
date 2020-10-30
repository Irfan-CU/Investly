require('./config/config');
require('./models/db');
require('./auth/auth');


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//const cookieParser = require('cookie-parser');
const passport = require('passport');

var app = express();

app.use(bodyParser.json());
app.use(cors());
//app.use(cookieParser);
app.use(passport.initialize());



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



// routing link
const rtsUsers = require('./routers/user');
const jwtAuth = require('./middleware/check-auth');
//requests
app.post('/api/sign-up', (req, res, next) => {
    console.log(req.headers.authorization.split(" ")[1]);
});
app.post('/api/log-in', rtsUsers);




// app.post('/api/refresh', rtsIndex);

//app.listen(process.env.PORT, () => console.log('listening at PORT ' + process.env.PORT));

module.exports = app;