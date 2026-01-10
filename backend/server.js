const express = require ('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config(); //load environment variables

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/auth',require('./routes/auth'));

app.get('/',(req,res)=>{
  res.send({message: 'Hello World!'});
});


mongoose
.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected!"))
.catch((err)=>console.error(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
  console.log(`Server is running at http://localhost:${PORT}`);
})