// Require in the schemae
// var User = require('../api/Users/userModel');
var Card = require('../api/Cards/cardModel');
var Game = require('../api/Games/gameModel');

// Populate users
// User.find({}).remove(function() {
//   User.create({
//   provider: 'local',
//     username: 'banfa',
//     name: 'Freddy Mercury',
//     email: 'banfa@test.com',
//     password: 'test'
//   },
//   {
//   provider: 'local',
//       username: 'JD',
//       name: 'John Doe',
//       email: 'JD@test.com',
//       password: 'test',
//       friends: ['happy', 'sleepy', 'dopey']
//   },
//   {

//   }, function() {
//       console.log('finished populating users');
//     }
//   );
// });

//Populate cards
Card.find({}).remove(function() {
  Card.create({
    simplehanzi: '中国',
    tradHanzi: '中國',
    pinyin: 'Zhōng guó',
    translation: 'China',
    info: 'Countries'
  },{
    simplehanzi: '美国',
    tradHanzi: '美國',
    pinyin: 'Měi guó',
    translation: 'America',
    info: 'Countries'
  },{
    simplehanzi: '马里',
    tradHanzi: '馬里',
    pinyin: 'Mǎ lǐ',
    translation: 'Mali',
    info: 'Countries'
  },{
    simplehanzi: '日本',
    tradHanzi: '日本',
    pinyin: 'Rì běn',
    translation: 'Japan',
    info: 'Countries'
  }, {
    simplehanzi: '德国',
    tradHanzi: '德國',
    pinyin: 'Dé guó',
    translation: 'Germany',
    info: 'Countries'
  }, function() {
      console.log('finished populating cards');
    }
  );
});
