const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
  userId: String,
  username: String,
  programId: String
});

const Application =  mongoose.model('application', applicationSchema);

module.exports = Application;
