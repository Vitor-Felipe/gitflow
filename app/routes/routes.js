const express = require('express');
const controller_ping = require('../controllers/ctrl_ping');
const controller_users = require('../controllers/ctrl_users');

const router = express.Router();

router.use(function timeLog(req, res, next){
    console.log('Time: ', Date.now());
    next();
});

router.get('/ping', controller_ping.Ping);
router.get('/user_get_all', controller_users.user_get_all);
router.post('/user_get_by_id', controller_users.user_get_by_id);
router.post('/user_add', controller_users.user_add);
router.put('/user_update', controller_users.user_update);
router.put('/user_delete', controller_users.user_delete);

module.exports = router;