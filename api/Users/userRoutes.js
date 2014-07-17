var userController = require('./userController.js');


module.exports = function (app) {
  // app === userRouter injected from middlware.js

  //app.post('/signin', userController.signin);
  app.get('/:username/friendslist', userController.getFriends);
  //app.get('/settings', userController.settings);
};