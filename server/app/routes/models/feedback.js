const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  userId: String,
  programId: String,
  replied: Boolean,
  createdOn: Date,
  details: String
});

const Feedback =  mongoose.model('feedback', feedbackSchema);

module.exports = Feedback;
