const path = require('path');

const router = require('express').Router();
const controller = require('./controllers');

router.get('/conversation/read/comments', controller.readComments.get);

module.exports = router;
