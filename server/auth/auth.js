var passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

var User = mongoose.model('User');

passport.use(new localStrategy({ usernameField: 'email' }, (email, password, done) => {
    console.log(password);
    User.findOne({ email: email }, (err, user) => {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false, { message: 'Incorrent Email.' });
        }
        if (!user.isValidPassword(password)) {
            return done(null, false, { message: 'Incorrect Password.' });
        } else {


            return done(null, user);
        }
    });

}))