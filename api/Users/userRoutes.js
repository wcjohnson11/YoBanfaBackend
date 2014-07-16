var express = require('express');
var controller = require('./userController');

var router = express.Router();

router.get('/:username/friendslist', controller.getFriends);

// router.get('/', controller.index);
// router.get('/:id', controller.show);
// router.post('/', controller.create);
// router.put('/:id', controller.update);
// router.patch('/:id', controller.update);
// router.delete('/:id', controller.destroy);

module.exports = router;
