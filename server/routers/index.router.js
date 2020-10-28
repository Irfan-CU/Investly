const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');

router.post('/api/sign-up', ctrlUser.register);
router.post('/api/log-in', ctrlUser.login);
//router.post('/api/refresh', ctrlUser.refresh);

module.exports = router;