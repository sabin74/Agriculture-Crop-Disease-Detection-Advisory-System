const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config(); 
connectDB();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

//routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/images',require('./routes/images'));
app.use('/api/advisory',require('./routes/advisory'));

app.get('/',(req,res)=>{
  res.send({message: 'Hello World!'});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})
