var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CardSchema = new Schema({
  simpleHanzi: String,
  tradHanzi: String,
  pinyin: String,
  translation: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Card', CardSchema);
