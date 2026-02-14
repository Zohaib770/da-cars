const bcrypt = require('bcryptjs');

exports.hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
};

exports.checkPassword = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword);
};