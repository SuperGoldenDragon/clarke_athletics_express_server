const express = require('express');
const router = express.Router();

const ApiRoutes = require('./apis/api.route');

router.use('/api', ApiRoutes);

module.exports = router;