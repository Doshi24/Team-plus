const router = require('express').Router();
const taskController = require('../controllers/task.controller');

router.get('/', taskController.getTasks);

module.exports = router;
