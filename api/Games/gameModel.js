var mongoose = require('mongoose');
var User = require('../users/userModel.js');
var Schema = mongoose.Schema;

var GameSchema = new Schema({
  creator: {
  type: Schema.ObjectId,
  ref: 'User'
  },

  challenged: {
  type: Schema.ObjectId,
  ref: 'User'
  },

  deck: {
  type: Array,
  default: []
  },

  creatorScore: {
  type: Number,
  default: 0
  },

  challengedScore: {
  type: Number,
  default: 0
  }
});

module.exports = mongoose.model('Game', GameSchema);
