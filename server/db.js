const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  userId: String,
  domain: String,
  timeSpent: Number,
  timestamp: Date
});

module.exports = mongoose.model('Log', logSchema);
