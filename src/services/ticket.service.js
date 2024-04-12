const mongoose = require('mongoose');
const MovieModel = require('../models/movie');

class TicketService {
  async createTicket(ticket, movie_id, session_id) {
    const movie = await MovieModel.findById(movie_id);
    if (!movie) {
      throw new Error('Movie not found!');
    }
    const session = movie.sessions.find((session) => session._id == session_id);
    if (!session) {
      throw new Error('Session not found!');
    }
    session.session.tickets.push(ticket);
    await movie.save();
    const newTicket = ticket;
    return newTicket;
  }

  //NOT WORKING
  async getTickets() {
    return TicketModel.find();
  }

  async getTicket(movie_id, session_id, ticket_id) {
    const movie = await MovieModel.findById(movie_id);
    if (!movie) {
      throw new Error('Movie not found!');
    }
    const session = movie.sessions.find((session) => session._id == session_id);
    if (!session) {
      throw new Error('Session not found!');
    }
    const ticket = session.session.tickets.find(
      (ticket) => ticket._id == ticket_id
    );
    if (!ticket) {
      throw new Error('Ticket not found!');
    }

    const resTicket = ticket;
    return resTicket;
  }

  async updateTicket(id, ticket) {
    const updatedTicket = await TicketModel.findByIdAndpdate(id, ticket, {
      new: true,
    });
    if (!updatedTicket) {
      throw new Error('Ticket não encontrado');
    }
    return updatedTicket;
  }

  async deleteTicket(id) {
    const ticket = await TicketModel.findByIdAndDelete(id);
    if (!ticket) {
      throw new Error('Ticket não encontrado');
    }
    return ticket;
  }
}

module.exports = new TicketService();
