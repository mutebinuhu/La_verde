const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  source: {
    type: String,
    required: true,
    enum: ['Facebook', 'Google', 'Referral', 'Website', 'Other'],
    default: 'Other'
  },
  status: {
    type: String,
    required: true,
    enum: ['New', 'Contacted', 'Qualified', 'Proposal Sent', 'Negotiation', 'Closed Won', 'Closed Lost'],
    default: 'New'
  },
  agent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Agent', // Assuming you have an Agent model to track the agent managing this lead
    required: true
  },
  interactions: [{
    type: {
      type: String,
      enum: ['Email', 'Phone Call', 'Meeting', 'WhatsApp', 'Other'],
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
    notes: String
  }],
  propertyInterestedIn: {
    type: String,
    required: true,
    trim: true
  },
  budget: {
    type: Number,
    required: true
  },
  timeline: {
    type: String,
    enum: ['Immediate', '1-3 months', '3-6 months', '6+ months'],
    default: 'Immediate'
  },
  comments: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Middleware to update `updatedAt` on document update
LeadSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Lead = mongoose.model('Lead', LeadSchema);

module.exports = Lead;
