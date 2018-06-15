const mongoose = require('mongoose');
const formSchema = require('./form.schema.server');
const formModel = mongoose.model(
  'FormModel', formSchema
);

function saveForm(form) {
  return formModel.create(form);
}

module.exports = {
  saveForm: saveForm
};