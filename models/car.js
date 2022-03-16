const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CarSchema = new Schema({

    brand: { type: String, required: true },
    type: { type: String, required: true, },
    distance: { type: Number, required: true },
    price: { type: Number, required: true, },

});

module.exports = mongoose.model('Car', CarSchema);