  const mongoose = require('mongoose');
  const passport = require('passport');
  const bcrypt = require('bcryptjs');

  const User = mongoose.model('User');

  module.exports.signup = (req, res, next) => {

      var user = new User();
      bcrypt.hash(req.body.password, 10).then(hash => {
          user.email = req.body.email;
          user.password = hash;
      })
      user.save()
          .then(
              result => {
                  res.status(201).json({
                      message: 'User Created'
                  });
              })
          .catch(err => {
              res.status(500).json({
                  error: err
              });
          });
  }



  //   user.save((err, doc) => { //doc is basically user as this function is called on user
  //       if (!err) {
  //           console.log("Added Succesfully" + doc);
  //           res.send(doc);

  //       } else {
  //           if (err.code == 11000)
  //               res.status(422).send(['Duplicate email adrress found.']);
  //           else
  //               return next(err);
  //       }

  //   });


  module.exports.login = (req, res, next) => {
      //call for passport authentication
      passport.authenticate('local', (err, user, info) => {
          if (err) { return res.status(400).json(err); } else if (user) {
              return res.status(200).json({ "token": user.generateJwt() })
          } else { return res.status(404).json(info); }
      })(req, res);
  }