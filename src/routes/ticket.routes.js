const express = require('express');
const TicketController = require('../controllers/ticket.controller');

const router = express.Router();

router.post(
  '/inserir/movie/:movieId/session/:sessionId',
  TicketController.createTicket
);
router.get(
  '/recuperar/movie/:movieId/session/:sessionId/ticket/:ticketId',
  TicketController.getTicket
);
router.put('/:id', TicketController.uptadeTicket);
router.delete('/:id', TicketController.deleteTicket);
module.exports = router;
