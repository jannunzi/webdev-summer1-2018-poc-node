module.exports = function (app) {
  app.post('/api/likes', likes);

  var movieModel = require('../models/movie.model.server');

  function likes(req, res) {
    var movie = req.body;
    movie = {
      title: movie.Title,
      imdbId: movie.imdbID,
      poster: movie.Poster
    };
    movieModel.createMovie(movie)
      .then(function(movie) {
        res.json(movie);
      });
  }
};