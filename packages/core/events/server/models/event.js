'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Event Schema
 */
var EventSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  group: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  permissions: {
    type: Array
  },
  updated: {
    type: Array
  }
});

/**
 * Validations
 */
EventSchema.path('title').validate(function(title) {
  return !!title;
}, 'Title cannot be blank');

EventSchema.path('group').validate(function(group) {
  return !!group;
}, 'Group cannot be blank');

EventSchema.path('content').validate(function(content) {
  return !!content;
}, 'Content cannot be blank');

/**
 * Statics
 */
EventSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).populate('user', 'name username').exec(cb);
};

mongoose.model('Event', EventSchema);
