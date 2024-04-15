const mongoose = require('mongoose');
const MovieModel = require('../models/movie');

class SessionService {
  async createSession(movie_id, sessionData) {
    const movie = await MovieModel.findById(movie_id);
    if (!movie) {
      throw new Error('Movie not found');
    }
    movie.session = sessionData;
    await movie.save();
    return movie.session;
  }

  async getSessions() {
    return MovieModel.find();
  }

  async getSession(movie_id) {
    const movie = await MovieModel.findById(movie_id);
    if (!movie || session === null) {
      throw new Error('Session not found');
    }
    return movie.session;
  }

  async updateSession(movie_id, sessionData) {
    const movie = await MovieModel.findByIdAndupdate(movie_id);
    if (!movie || !movie.session) {
      throw new Error('Movie not found');
    }
    movie.session = sessionData;
    await movie.save();
    return movie.session;
  }

  async deleteSession(movie_id) {
    const movie = await SessionModel.findByIdAndDelete(movie_id);
    if (!movie || !movie.session) {
      throw new Error('Session not found');
    }
    movie.session = undefined;
    await movie.save();
    return 'Session deleted';
  }
}

module.exports = new SessionService();
