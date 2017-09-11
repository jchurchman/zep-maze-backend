const db = require('./helpers/db');
const request = require('./helpers/request');
const { assert } = require('chai');

describe('Users rest API', () => {

    before(() => db.drop('users'));

    it('gets a user\'s cumulative score by id', () => {

    });

});