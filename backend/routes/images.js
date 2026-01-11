const express = require("express");
const router = express.Router();

const { getImages, uploadImage, deleteImage } = require('../controllers/imageController.js');

router.get('/', getImages);
router.post('/upload', uploadImage);
router.delete('/:id', deleteImage);

module.exports = router;
