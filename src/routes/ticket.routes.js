const express = require('express');
const TicketController = require('../controllers/ticket.controller');

const router = express.Router();

router.post('/tickets', TicketController.createTicket);
router.get('/tickets', TicketController.getTickets);
router.get('/tickets:id', TicketController.getTicket);
router.put('/tickets:id', TicketController.uptadeTicket);
router.delete('/tickets:id', TicketController.deleteTicket);
module.exports = router;
