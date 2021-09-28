const { Router } = require('express');
const userController = require('../controllers/user-controller');

const router = Router();

router.get('/user', userController.get);

router.post('/user', userController.post);

module.exports = router;
