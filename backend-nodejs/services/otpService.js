const otpStorage = new Map();

exports.generateOTP = (email) => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStorage.set(email, {
        otp,
        expires: Date.now() + 5 * 60 * 1000 // 5 Minuten
    });
    
    // Automatische Bereinigung nach Ablauf
    setTimeout(() => {
        if (otpStorage.has(email)) {
            otpStorage.delete(email);
        }
    }, 5 * 60 * 1000);
    
    return otp;
};

exports.validateOTP = (email, otp) => {
    const stored = otpStorage.get(email);
    
    if (!stored) {
        return false;
    }
    
    if (Date.now() > stored.expires) {
        otpStorage.delete(email);
        return false;
    }
    
    return stored.otp === otp;
};