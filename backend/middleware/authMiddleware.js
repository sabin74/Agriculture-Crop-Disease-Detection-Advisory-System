const jwt = require('jsonwebtoken');
const Farmer = require('../models/Farmer'
);

const protect = async (req,res,next)=>{
  let token;


  //check for token in headers

  if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){

    try{

      token = req.headers.authorization.split(" ")[1];

      //verify token

      const decoded = jwt.verify(token,process.env.JWT_SECRET);

      req.farmer= await Farmer.findById(decoded.id).select('-password');
      next();

    } catch(error){
      console.log(error);
      res.status(401).json({message: " Not authorized, token failed! "});
    }

  }

  if(!token){
    res.status(401).json({message: "Not authorized , no token!"})
  }
};

module.exports = {protect};