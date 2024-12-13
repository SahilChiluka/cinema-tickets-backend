const express = require('express');

const router = express.Router();

const {getUsers, insertUsers, getUserbyId} = require('../controllers/userscontroller')

router.route('/').get(getUsers);

router.route('/:id').get(getUserbyId);

router.route('/insertUser').post(insertUsers);

module.exports = router;