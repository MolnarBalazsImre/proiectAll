const mongoose = require('mongoose');

const rentSchema = new mongoose.Schema({
    book:{
        type: String,
        required: true
    },
    user:{
        type: String,
        required: true
    },
    days:{
        type: Number,
        required: true
    },
    createdAt:{
        type: Date,
        default: ()=>Date.now()
    }
})

module.exports = mongoose.model("Rent", rentSchema)