var Game = require('./gameModel.js'),
    User = require('../users/userModel.js');

module.exports = {
  //add Game to database
  create: function (req, res) {
    var newGame = {
      creator: "53c5b12f1c89a4e0191609a7",
      challenged: "53c5b12f1c89a4e0191609a7",
      deck: [],
    };
    Game.create(newGame, function(err, game){
      if (err){ return handleError(res, err); }
      return res.json(201, game);
    });
  },

  //get game from database
  show: function (req, res) {
  },

  //update when the first user completes the game
  update: function (req, res){
  },

  //destroy when both users complete the game
  destroy: function(req, res){

  }
};
