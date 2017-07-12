'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new mongoose.Schema({
  // Lesson 2: Implement the List Model
  title: String,
  position: Number,
  cards: Array
});

listSchema.set('timestamps', true);

module.exports = mongoose.model('List', listSchema);
