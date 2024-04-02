const mongoose = require('mongoose');
 
const countSchema = new mongoose.Schema({
    count: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
});


const CountSchema = mongoose.model('countSchema', countSchema);
module.exports = CountSchema;