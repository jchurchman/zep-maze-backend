const assert = require('chai').assert;
const User = require('../../lib/models/user');

describe('user model', () => {

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

    it('new user generates hash', () => {
        const user = new User({
            email: 'bob@bob.bob'
        });
        const password = '123';
        user.generateHash(password);

        assert.notEqual(user.hash, password);

        assert.isOk(user.comparePassword('123'));
        assert.isNotOk(user.comparePassword('badpassword'));
    });

});