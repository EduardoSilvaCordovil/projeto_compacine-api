const MovieModel = require('../models/movie');

class MovieService {
  async createMovie(movie) {
    const newMovie = new MovieModel(movie);
    await newMovie.save();
    return newMovie;
  }

  async getMovies() {
    return MovieModel.find();
  }

  async getMovie(id) {
    const movie = MovieModel.findById(id);

    if(!movie) {
      throw new Error('Movie not found');
    }

    return movie;
  }

  async updateMovie(id, movie) {
    const updatedMovie = await MovieModel.findByIdAndUpdate(id, movie, { new:true });

    if(!updatedMovie) {
      throw new Error('Movie not found');
    }

    return updatedMovie;
  }

  async deleteMovie(id) {
    const movie = MovieModel.findByIdAndDelete(id);

    if(!movie) {
      throw new Error('Movie not found');
    }

    return movie;
  }
}

module.exports = new MovieService();