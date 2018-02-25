const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema({
  staffId: String,
  name: String,
  programsCreated: [String],
  age: Number,
  contact: String
});

const Staff =  mongoose.model('staff', staffSchema);

module.exports = Staff;
