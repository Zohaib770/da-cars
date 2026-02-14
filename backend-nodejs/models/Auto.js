const mongoose = require('mongoose');

const autoSchema = new mongoose.Schema({
    marke: {
        type: String,
        required: true
    },
    modell: {
        type: String,
        required: true
    },
    beschreibung: {
        type: String
    },
    baujahr: {
        type: Number,
        required: true
    },
    kmStand: {
        type: Number,
        required: true
    },
    tuev: {
        type: Date
    },
    leistung: {
        type: Number // PS
    },
    preis: {
        type: mongoose.Schema.Types.Decimal128,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Auto', autoSchema);