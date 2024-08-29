import mongoose from 'mongoose';

const JobApplicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  cv: {
    type: String, // Store the file path or URL of the uploaded CV
    required: true,
  },
}, {
  timestamps: true,
});

const JobApplication = mongoose.models.JobApplication || mongoose.model('JobApplication', JobApplicationSchema);

export default JobApplication;
