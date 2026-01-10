const Farmer = require('../models/Farmer');
const jwt = require('jsonwebtoken');

//generate JWT token

const generateToken = (id) =>{
  return jwt.sign(
    {id},
    process.env.JWT_SECRET,
    {expiresIn: '7d'}
  );
};


//registration
exports.registerFarmer = async (req,res)=>{

try{

  const {name, email, password} = req.body;

  //check if farmer already exists

   const existingFarmer = await Farmer.findOne({email});
   if(existingFarmer){
    return res.status(400).json({message: "Farmer is already registered!"});
   }

   //else create from model

   const farmer = await Farmer.create({
    name,
    email,
    password,
   });

   res.status(201).json({
    _id: farmer._id,
    name: farmer.name,
    email: farmer.email,
    token: generateToken(farmer._id),
   })

} catch(error){
  console.error(error);
  res.status(500).json({message: "Registration Failed"});
}
};


//login

exports.loginFarmer = async (req,res) =>{
  try{
    const {email,password} = req.body;

    //find by email
    const farmer = await Farmer.findOne({email});
    if(!farmer){
      return res.status(400).json({message: "Invalid Email!"});
    }

    const isMatch = await farmer.matchPassword(password);
      if(!isMatch){
        return res.status(400).json({message: "Invalid Password!"});
      }

      res.status(200).json({
      id:farmer._id,
      name: farmer.name,
      email: farmer.email,
      token: generateToken(farmer._id),
    });


    } catch(error){
      res.status(500).json({message: "Login Failed! "});
    }
  };



