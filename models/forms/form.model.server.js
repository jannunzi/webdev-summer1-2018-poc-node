const mongoose = require('mongoose');
const formSchema = require('./form.schema.server');
const formModel = mongoose.model(
  'FormModel', formSchema
);

function saveForm(form) {
  return formModel.create(form);
}

function findAllForms() {
  return formModel.find({}, {name: 1, creator: 1});
}

function findFormById(formId) {
  return formModel.findById(formId);
}

module.exports = {
  findFormById: findFormById,
  saveForm: saveForm,
  findAllForms: findAllForms
};