const express = require('express');
const TicketController = require('../controllers/ticket.controller');

const router = express.Router();

router.post('/', TicketController.createTicket);
router.get('/', TicketController.getTickets);

module.exports = router;
