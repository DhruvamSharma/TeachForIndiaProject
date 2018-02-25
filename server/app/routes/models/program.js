const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const programSchema = new Schema({
  name: String,
  description: String,
  addedOn: Date,
  applicationsReceived: Number,
  lastDate:Date,
  programId: String
});

const Program =  mongoose.model('program', programSchema);

module.exports = Program;
