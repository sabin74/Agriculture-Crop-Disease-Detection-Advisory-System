const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    farmer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farmer',
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  diseaseDetected: {
    type: String,
    default: 'pending'
  }
}, { timestamps: true });

module.exports = mongoose.model('Image', imageSchema);
