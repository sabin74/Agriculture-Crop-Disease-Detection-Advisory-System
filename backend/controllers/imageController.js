const Image = require('../models/Images.js');
const fs = require('fs');
const path = require('path');

const getImages = async (req, res) => {
  try {
    const images = await Image.find({ farmer: req.user._id })
      .sort({ createdAt: -1 });

    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded!' });
    }

    const image = await Image.create({
      farmer: req.user._id,
      imageUrl: `/uploads/${req.file.filename}`,
      diseaseDetected: 'pending'
    });

    res.status(201).json({
      message: 'Image uploaded successfully!',
      image
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteImage = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);

    if (!image) {
      return res.status(404).json({ message: 'Image not found!' });
    }

    if (image.farmer.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized!' });
    }

    const filePath = path.join(__dirname, '..', image.imageUrl);

    fs.unlink(filePath, (err) => {
      if (err) console.error('File delete error:', err);
    });

    await image.deleteOne();

    res.status(200).json({ message: 'Image deleted successfully!' });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getImages,
  uploadImage,
  deleteImage
};
