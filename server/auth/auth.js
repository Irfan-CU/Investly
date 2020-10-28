var passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

var User = mongoose.model('User');

passport.use(new localStrategy({ usernameField: 'email' }, (username, password, done) => {
    User.findOne({ email: username }, (err, user) => {
        if (err) { return done(err); } else if (!user) { return done(null, false, { message: 'Incorrent Email.' }); } else if (!user.isValidPassword(password)) {
            return done(null, false, { message: 'Incorrect Password.' });
        } else { return done(null, user); }
    });

}))