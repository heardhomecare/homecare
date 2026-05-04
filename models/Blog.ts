import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
  },
  writer: {
    type: String,
  },
  slug: {
    type: String,
    required: [true, 'Please provide a slug'],
    unique: true,
  },
  content: {
    type: String,
    required: [true, 'Please provide content'],
  },
  excerpt: {
    type: String,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
    default: 'Uncategorized',
  },
  author: {
    type: String,
    default: 'Kala Omeiza',
  },
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft',
  },
  publishedAt: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
