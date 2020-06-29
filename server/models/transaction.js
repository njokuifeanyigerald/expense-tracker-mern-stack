const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add Some text']
    },
    amount: {
        type: Number, 
        required: [true, 'Please add positive or a negative number']
    },
    Date: {
        type: Date,
        default: Date.now
    }
})

module.exports  = mongoose.model('Transaction', TransactionSchema)