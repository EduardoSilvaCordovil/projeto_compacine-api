const MovieModel = require('../models/movie');

class MovieService {
  async createMovie(movie) {
    const newMovie = new MovieModel(movie);
    await newMovie.save();
    return newMovie;
  }

  async getMovies() {
    const movies = await MovieModel.find();
    if (!movies) {
      throw new Error('Movie not found');
    }

    return { Search: movies, totalResults: movies.length };
  }

  async getMovie(id) {
    const movie = await MovieModel.findById(id);

    if (!movie) {
      throw new Error('Movie not found');
    }

    return movie;
  }

  async updateMovie(id, movie) {
    const updatedMovie = await MovieModel.findByIdAndUpdate(id, movie, {
      new: true,
    });

    if (!updatedMovie) {
      throw new Error('Movie not found');
    }

    return updatedMovie;
  }

  async deleteMovie(id) {
    const movie = await MovieModel.findByIdAndDelete({ _id: id });

    if (movie == null) {
      throw new Error('Movie not found');
    }
    console.log(movie);

    return movie;
  }
}

module.exports = new MovieService();
