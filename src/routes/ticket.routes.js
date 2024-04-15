const express = require('express');
const TicketController = require('../controllers/ticket.controller');

const router = express.Router();

router.post('/inserir/movie/:movieId/', TicketController.createTicket);
router.get(
  '/recuperar/movie/:movieId/ticket/:ticketId',
  TicketController.getTicket
);

module.exports = router;
