const mongoose = require('mongoose');

const autoBildSchema = new mongoose.Schema({
    autoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Auto',
        required: true
    },
    bildUrl: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('AutoBild', autoBildSchema);