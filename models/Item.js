// create model of the data for mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const itemSchema = new Schema({
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
module.exports = item = mongoose.model('item', itemSchema)