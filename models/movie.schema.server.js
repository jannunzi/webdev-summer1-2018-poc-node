var monogoose = require('mongoose');
var movieSchema = monogoose.Schema({
  title: String,
  imdbId: String,
  poster: String
}, {collection: 'movies'});
module.exports = movieSchema;