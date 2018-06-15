const mongoose = require('mongoose');
const formElementSchema = require('./form-element.schema.server');
const formSchema = mongoose.Schema({
  name: String,
  elements: [formElementSchema]
}, {collection: 'forms'});
module.exports = formSchema;