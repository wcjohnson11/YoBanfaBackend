var mongoose = require('mongoose'),
    Game = require('../games/gameModel'),
    //bcrypt   = require('bcrypt'),
    Q        = require('q'),
    SALT_WORK_FACTOR  = 10;


var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },

  friends: {
    type: Array,
    default: []
  },

  wins: {
    type: Number,
    default: 0
  },

  totalGames: {
    type: Number,
    default: 0
  },

  //currentGames should connect to Game schema
  // currentGames: [{ type: Schema.Types.ObjectId, ref: 'Game'}]

  //future customization
  //preferredHanzi: String

});

UserSchema.methods.authorize = function (candidatePassword) {
  var checkOAuth = true;
  return checkOAuth;
};

/*var testUser = mongoose.model('User', UserSchema);
var johnDoe = new testUser ({
  username: 'johnDoe',
  friends: ['happy', 'sleepy', 'dopey']
});
johnDoe.save(function(err){if(err)console.log('err on johnDoe test')})*/

module.exports = mongoose.model('User', UserSchema);