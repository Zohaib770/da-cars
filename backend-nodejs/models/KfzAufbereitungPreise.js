const mongoose = require('mongoose');

const kfzAufbereitungPreiseSchema = new mongoose.Schema({
    autopflege: {
        type: String,
        required: true,
        unique: true
    },
    pkwPreis: {
        type: mongoose.Schema.Types.Decimal128
    },
    vanSuvPreis: {
        type: mongoose.Schema.Types.Decimal128
    },
    kleinbusPreis: {
        type: mongoose.Schema.Types.Decimal128
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('KfzAufbereitungPreise', kfzAufbereitungPreiseSchema, 'kfzaufbereitungpreise');