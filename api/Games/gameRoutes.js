var gameController = require('./gameController.js');


module.exports = function (app) {
  // app === gameRouter injected from middlware.js

  app.get('/getgame', gameController.show)
  //app.post('/creategame', gameController.create);
  //app.put('/completegame', gameController.update);
  //app.delete('/removegame', gameController.destroy);
};