var mongoose = require('mongoose'),
    User = require('../users/userModel.js'),
    Schema = mongoose.Schema;

var GameSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  challenged: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  deck: {
    type: Array,
    default: []
  },

  creatorScore: {
    type: Number,
    default: -1
  },

  challengedScore: {
    type: Number,
    default: -1
  }
});


// module.exports = mongoose.model('Game', GameSchema);