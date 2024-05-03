const express = require('express');
const router = express.Router();

const AuthRoutes = require('./auth.route');

router.use('/auth', AuthRoutes);

module.exports = router;