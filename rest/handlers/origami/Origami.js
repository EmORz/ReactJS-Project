const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const origamiSchema = new mongoose.Schema({
  author: {
    type: ObjectId,
    ref: 'User'
  },
  description: {
    type: String,
    required: true
  }
});



module.exports = mongoose.model("Origami", origamiSchema);




