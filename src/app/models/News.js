const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const News = new Schema({
  name: { type: String, maxLength: 255 },
  description: { type: String , maxLength: 600},
  img: { type: String , maxLength: 400},
  datecreate: { type: Date, default: Date.now },
  dateupdate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('News', News);