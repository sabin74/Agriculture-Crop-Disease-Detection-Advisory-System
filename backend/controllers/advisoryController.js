const Advisory = require('../models/Advisory');

const getAdviceByDisease = async (req, res) => {
  try {
    const { disease } = req.params;

    const advisory = await Advisory.findOne({ disease });

    if (!advisory) {
      return res.status(404).json({
        message: 'Advice not found for this disease!'
      });
    }

    res.status(200).json({
      disease: advisory.disease,
      advice: advisory.advice
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getAdviceByDisease };
