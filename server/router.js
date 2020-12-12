const express = require('express');
const router = express.Router();
const api = require('./api');
var bodyParser = require('body-parser');


router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extented:false}));

router.post('/ds/user/login', (req, res, next) => {
    api.login(req, res, next);
})

router.post('/ds/user/getUserInfo', (req, res, next) => {
    api.getUserInfo(req, res, next);
})

module.exports = router;