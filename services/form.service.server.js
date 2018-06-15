const mongoose = require('mongoose');
const formModel = require('../models/forms/form.model.server');

module.exports = function (app) {

  app.post('/api/form', saveForm);
  app.get('/api/form', findAllForms);
  app.get('/api/form/:formId', findFormById);

  function findFormById(req, res) {
    var formId = req.params['formId'];
    formModel.findFormById(formId)
      .then(function (form) {
        res.json(form);
      });
  }

  function findAllForms(req, res) {
    formModel
      .findAllForms()
      .then(function (forms) {
        res.json(forms);
      });
  }

  function saveForm(req, res) {
    const form = req.body;
    formModel
      .saveForm(form)
      .then(function (form) {
        res.json(form)
      });
  }
};