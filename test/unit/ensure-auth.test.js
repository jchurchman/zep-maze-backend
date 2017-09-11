const { assert } = require('chai');
const ensureAuth = require('../../lib/auth/ensure-auth')();
// const tokenService = require('../../lib/auth/token-service');

describe.only('ensure auth middleware', () => {

    it('routes to error handler when no token found in Authorization header', done => {
        const req = {
            get() { return ''; }
        };

        const next = (error) => {
            assert.deepEqual(error, { code: 401, error: 'No Authorization Found' });
            done();
        };

        ensureAuth(req, null, next);

    });


})