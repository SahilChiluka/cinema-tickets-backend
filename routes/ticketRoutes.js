const express = require('express');
const { getticket, insertticket, getticketbyid, getticketsbyuser } = require('../controllers/ticketController');

const router = express.Router();

router.route("/").get(getticket);
router.route("/insertTicket").post(insertticket);
router.route("/:id").get(getticketbyid);
router.route("/user/:id").get(getticketsbyuser);

module.exports = router;