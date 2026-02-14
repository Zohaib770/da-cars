const mongoose = require('mongoose');

const benutzerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    passwort: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'USER',
        enum: ['ADMIN', 'USER']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Benutzer', benutzerSchema);