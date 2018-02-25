const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema({
  username: String,
  programsCreated: [String],
  age: Number,
  contact: String,
  staffId: String
});

const Staff =  mongoose.model('staff', staffSchema);

module.exports = Staff;
