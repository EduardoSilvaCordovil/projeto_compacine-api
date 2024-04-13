const express = require('express');
const TicketController = require('../controllers/ticket.controller');

const router = express.Router();

router.post('/inserir/movie/:movieId/', TicketController.createTicket);
router.get(
  '/recuperar/movie/:movieId/ticket/:ticketId',
  TicketController.getTicket
);
router.put(
  '/update/movie/:movieId/ticket/:ticketId',
  TicketController.uptadeTicket
);
router.delete(
  '/delete/movie/:movieId/ticket/:ticketId',
  TicketController.deleteTicket
);
module.exports = router;
