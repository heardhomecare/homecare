import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
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
  city: {
    type: String,
    required: [true, 'Please provide a city'],
  },
  source: {
    type: String,
  },
  message: {
    type: String,
    required: [true, 'Please provide a message'],
  },
  textOptIn: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
