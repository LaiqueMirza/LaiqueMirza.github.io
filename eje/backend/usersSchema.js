import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const usersSchema = new mongoose.Schema({
  userInfo: {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumberMain: {
      type: Number,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  tokens:[{
    token:{
      type:String,
      required:true
    }
  }],
  userAddress: {
    addresses: [
      {
        addressLine1: String,
        addressLine2: String,
        city: String,
        pinCode: Number,
        phoneNumberAddress: Number,
      },
    ],
    selectedAddress: {
      addressLine1: String,
      addressLine2: String,
      city: String,
      pinCode: Number,
      phoneNumberAddress: Number,
    },
  },
  userCart: {
    countOfCart: Number,
    itemsInCart: [
      {
        preview: String,
        photos: [{ type: String }],
        description: String,
        size: [{ type: String }],
        productName: String,
        selectedSize: String,
        quantity: Number,
        brand: String,
        price: Number,
        date: Date,
      },
    ],
  },
});

//generating access toke so that anyone can't make the request
usersSchema.methods.generateAuthToken= async function(){
  try{
    const token = jwt.sign({_id:this._id.toString()},
    process.env.SECRET_KEY
    );
    this.tokens= this.tokens.concat({token:token})
    await this.save();
    return token
  }catch(err){
    console.log(err);
    res.send("error is "+ err);
  }
}

//hashing the password from lai to beufurvfvf$...
// so that hacker can't see pasword
usersSchema.pre("save",async function(next){
  console.log(this.userInfo.password,">>>>>>>>>>");
console.log(this.isModified('userInfo'))
    if(this.isModified('userInfo')){
      console.log(this.userInfo.password,"<<<<<<<<<<");
      this.userInfo.password = await bcrypt.hash(this.userInfo.password, 10)
      console.log(this.userInfo.password);
    }
  next();
})

export default usersSchema;
