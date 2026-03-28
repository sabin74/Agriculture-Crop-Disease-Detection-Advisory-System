const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Advisory = require('./models/Advisory');

dotenv.config();

const seedData = [
  { disease: 'Tomato Late Blight', advice: 'Remove infected leaves and apply fungicide.' },
  { disease: 'Tomato Early Blight', advice: 'Use crop rotation and fungicide sprays.' },
  { disease: 'Potato Blight', advice: 'Remove infected plants and avoid waterlogging.' },
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await Advisory.deleteMany(); // clear old data
    await Advisory.insertMany(seedData);
    console.log('Advisory data seeded');
    mongoose.connection.close();
  })
  .catch((err) => console.error(err));
