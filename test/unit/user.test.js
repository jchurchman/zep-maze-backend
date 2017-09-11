const assert = require('chai').assert;
const User = require('../../lib/models/user');

describe.only('user model', () => {

    it('validates with required fields', () => {
        const user = new User({
            email: 'me@me.me',
            hash: '123'
        });

        return user.validate();
    });

});