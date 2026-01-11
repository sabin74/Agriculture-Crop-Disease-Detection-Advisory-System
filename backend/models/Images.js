const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    farmer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farmer',
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
    },
    diseaseDetected: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Image = mongoose.model('image', imageSchema);
module.exports = Image;
