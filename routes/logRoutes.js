const express = require('express');

const router = express.Router();

const {
    getalllogs,
    insertLogs,
    editlogbyid,
} = require('../controllers/logController');

router.route("/").get(getalllogs);

router.route("/insertlogs").post(insertLogs);

router.route("/:id").patch(editlogbyid);

module.exports = router;