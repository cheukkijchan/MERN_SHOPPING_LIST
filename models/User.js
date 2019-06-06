// create model of the data for mongoose
// https://mongoosejs.com/docs/guide.html

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  }
});

// export for use and  to mongoose with a name and model
module.exports = User = mongoose.model("user", UserSchema);
