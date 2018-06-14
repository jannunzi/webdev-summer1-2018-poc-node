var mongoose = require('mongoose');
var movieSchema = require('./movie.schema.server');
var movieModel = mongoose.model('MovieModel', movieSchema);

function createMovie(movie) {
  return movieModel.create(movie);
}

module.exports = {
  createMovie: createMovie
};