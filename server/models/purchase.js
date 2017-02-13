var mongoose = require('mongoose');

var purchaseSchema = mongoose.Schema({
    ownerId: { type: String, index: true },
    category: String,
    cost: Number,
    date: Date
});

module.exports = mongoose.model('Purchase', purchaseSchema);
