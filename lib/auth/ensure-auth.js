// const tokenService = require('./token-service');

module.exports = function getEnsureAuth() {

    return function ensureAuth(req, res, next) {
        const token = null;
        if(!token) {
            return next({
                code: 401,
                error: 'No Authorization Found'
            });
        }
    };
};