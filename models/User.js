 import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema({ 
  name: {
    type: String, 
    required:[true,"Please provide a name"],
    min:2,
    max:25,
    trim: true,
  },
  email: {
    type: String, 
    required:[true,"Please provide an email"],
    validate:{
      validator: validator.isEmail,
      message: 'Please provide is a valid email',
    },
    unique: true,
    
  }, 
  password: {
    type: String, 
    required:[true,"Please provide a password"],
    trim: true,
    // validate:{ 
    //   validator: validator.isStrongPassword,
    //   message:'Password is not strong enough'
    // },
    select:false, 
  },
  lastName: {
    type: String, 
    max:25,
    trim: true,
    default: 'Last Name',
  },
  location: {
    type: String, 
    max:25,
    trim: true,
    default: "my city"
  }

})

UserSchema.pre('save', async function () {
  if (!this.isModified('password')) return
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createJWT = function(){
  return jwt.sign({userId:this._id},process.env.JWT_SECRET, {expiresIn:process.env.JWT_LIFETIME})
}
UserSchema.methods.comparePassword = async function(candidatePassword){
  const isMatch = await bcrypt.compare(candidatePassword,this.password)
  return isMatch;
}


export default mongoose.model('User',UserSchema);