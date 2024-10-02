const userController = require('../controllers/index.controller');

const router = require('express').Router();

// endpoint utama
router.get('/', userController.home)

// endpoint untuk membuat schedule
router.post('/schedule', userController.createSchedule)

module.exports = router;