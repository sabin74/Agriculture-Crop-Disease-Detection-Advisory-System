const mongoose = require('mongoose');

const advisorySchema = new mongoose.Schema({
  disease: {
    type: String,
    required: true,
    unique: true
  },
  advice: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Advisory', advisorySchema);
