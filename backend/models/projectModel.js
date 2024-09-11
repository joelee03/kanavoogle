const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Section Schema for the three sections below the carousel
const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,  // URL for the project link
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Automatically update the `updatedAt` field when the section is modified
projectSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create and export the Section model
module.exports = mongoose.model('Section', projectSchema);
