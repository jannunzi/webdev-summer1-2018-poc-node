const mongoose = require('mongoose');
const formElementSchema = mongoose.Schema({
  name: String,
  type: String,
  placeholder: String,
  value: String,
  fillin: String,
  options: String,
  orientation: String,
  size: Number,
  rows: Number,
  columns: Number
});
module.exports = formElementSchema;