import mongoose from 'mongoose';

const JobListingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a job title'],
  },
  location: {
    type: String,
    required: [true, 'Please provide a location'],
  },
  type: {
    type: String,
    required: [true, 'Please provide a job type (e.g. Full-time)'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a job description'],
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.JobListing || mongoose.model('JobListing', JobListingSchema);
