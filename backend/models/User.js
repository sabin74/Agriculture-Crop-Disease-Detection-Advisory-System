const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema(
  {
    username:{
      type: String,
      required:[true,'Username is required'],
      minlength: 3,
      trim:true,
    },

    email:{
      type:String,
      required:[true,'Email is required'],
      trim:true,
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please enter a valid email"],
      unique:true,
    },

    password:{
      type:String,
      required:[true,'Password is required!'],
      match:[/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
      "Password must be 8+ chars, with uppercase, lowercase, number & special char"]
    },
  }
  ,{timestamps:true}
);



//hashing before saving
UserSchema.pre("save",async function(){

  if(!this.isModified("password")){
    return;
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password,salt);

});

//if not modified compare pwd for login

UserSchema.methods.matchPassword = async function(enteredPwd){
  return await bcrypt.compare(enteredPwd, this.password);
};

module.exports = mongoose.model("User",UserSchema);
