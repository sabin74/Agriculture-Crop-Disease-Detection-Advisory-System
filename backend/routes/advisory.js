const express = require('express');
const router = express.Router();

const { getAdviceByDisease } = require('../controllers/advisoryController');
const {protect} = require('../middleware/authMiddleware');

router.get('/:disease',protect,getAdviceByDisease);

module.exports = router;