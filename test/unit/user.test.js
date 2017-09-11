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

    it('fails validation when required fields missing', () => {
        const bill = new User();

        return bill.validate()
            .then( () => {
                throw new Error('expected validation error but did not get one');
            },
            ({ errors }) => {
                assert.ok(errors.email);
                assert.ok(errors.hash);
            }
            );
    });

});