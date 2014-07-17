var User = require('./userModel.js'),
    Q    = require('q'),
    jwt  = require('jwt-simple');

module.exports = {
  //search database for user
  signin: function (req, res, next) {
    var username = req.body.username;

    var findUser = Q.nbind(User.findOne, User);
    findUser({username: username})
      .then(function (user) {
        if (!user) {
          next(new Error('User does not exist'));
        } else {
          return user.authorize(password);
        }
      })
      .fail(function (error) {
        next(error);
      });
  },

  //add user to database
  signup: function (req, res, next) {
  },

  //check whether user is authorized
  checkAuth: function (req, res, next) {
  },

  //get list of all user's friends
  getFriends: function(req, res) {
    User.findOne({username: req.params.username}, function (err, user) {
      if(err) { return handleError(res, err); }
      if(!user) { return res.send(404); }
        res.json(user.friends);
    });
  }
};