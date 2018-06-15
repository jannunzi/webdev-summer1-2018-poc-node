const mongoose = require('mongoose');
const formModel = require('../models/forms/form.model.server');

module.exports = function (app) {
  app.post('/api/form', saveForm);

  function saveForm(req, res) {
    const form = req.body;
    formModel
      .saveForm(form)
      .then(function (form) {
        res.json(form)
      });
  }
};