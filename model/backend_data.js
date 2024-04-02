const mongoose = require('mongoose');
 
const dataSchema = new mongoose.Schema({
    value: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});


const DataSchema = mongoose.model('dataSchema', dataSchema);
module.exports = DataSchema;