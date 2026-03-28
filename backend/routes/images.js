const express = require ('express');
const router = express.Router();

const {protect} = require('../middleware/authMiddleware')
const upload = require('../middleware/upload.js')

const {getImages,
   uploadImage,
    deleteImage
  } = require('../controllers/imageController');

router.post('/upload',protect,upload.single('image'),uploadImage);

router.get('/',protect,getImages);

router.delete('/:id',protect,deleteImage);

module.exports = router;
