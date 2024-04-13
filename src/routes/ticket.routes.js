const express = require('express');
const TicketController = require('../controllers/ticket.controller');

const router = express.Router();

router.post('/inserir/movie/:movieId/', TicketController.createTicket);
router.get(
  '/recuperar/movie/:movieId/ticket/:ticketId',
  TicketController.getTicket
);
router.put(
  '/update/movie/:movieId/session/:sessionId/ticket/:ticketId',
  TicketController.uptadeTicket
);
router.delete(
  '/delete/movie/:movieId/session/:sessionId/ticket/:ticketId',
  TicketController.deleteTicket
);
module.exports = router;
