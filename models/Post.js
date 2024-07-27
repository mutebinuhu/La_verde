// models/Post.js
import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for the post'],
  },
  slug: {
    type: String,
    required: [true, 'Please provide a slug for the post'],
    unique: true,
  },
  approved:{
    type:Boolean,
    default:false
  },
  content: {
    type: String,
    required: [true, 'Please provide content for the post'],
  },
}, {
  timestamps: true,
});

export default mongoose.models.Post || mongoose.model('Post', PostSchema);
