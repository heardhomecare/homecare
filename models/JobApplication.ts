import mongoose from 'mongoose';

const JobApplicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
  },
  phone: {
    type: String,
    required: [true, 'Please provide a phone number'],
  },
  jobTitle: {
    type: String,
    required: [true, 'Please provide the job title'],
  },
  experience: {
    type: String,
    required: [true, 'Please provide years of experience'],
  },
  message: {
    type: String,
    required: [true, 'Please provide a message'],
  },
  status: {
    type: String,
    enum: ['pending', 'reviewed', 'interviewed', 'rejected'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.JobApplication || mongoose.model('JobApplication', JobApplicationSchema);
