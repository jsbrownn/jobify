import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  company: { 
    type: String, 
    required: [true,'Please enter a company name'], 
    maxlength: 50,
    trim: true
  }, 
  position: {
    type: String, 
    required: [true,'Please enter a position'], 
    maxlength: 100,
    trim: true
  }, 
  status: {
    type: String,  
    enum:["pending","interview","declined"],
    default:"pending"
  },
  jobType: {
    type: String,  
    enum:["full-time","part-time","remote","intership"],
    default:"full-time"
  }, 
  jobLocation: {
    type: String, 
    required: true, 
    default:"my city"
  },
  createdBy: {
    type:mongoose.Types.ObjectId, 
    ref: "User", 
    required: [true,"Please provide a user"]
  }
},
{timestamps:true}
)

export default mongoose.model("Job",JobSchema)