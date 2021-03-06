// create model of the data for mongoose
// https://mongoosejs.com/docs/guide.html

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// export for use and  to mongoose with a name and model
module.exports = Item = mongoose.model("item", ItemSchema);
