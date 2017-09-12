const jwt = require('jsonwebtoken-promisified');
const appSecret = process.env.APP_SECRET || 'stinky-cheese';

module.exports = {
    sign(user) {
        const payload = {
            id: user._id
        };
        return jwt.signAsync(payload, appSecret);
    },
    verify(token) {
        return jwt.verifyAsync(token, appSecret);
    }
};