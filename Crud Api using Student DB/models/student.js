const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    rollno: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Schema',studentSchema);