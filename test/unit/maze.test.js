const Maze = require('../../lib/models/maze');
const { assert } = require('chai');

describe('maze', () => {

    it('validates a maze with required fields', () => {
        const one = new Maze({
            matrix: [
                [ 'WALL', 'WALL', 'WALL', 'WALL', 'WALL', ],
                [ 'WALL', 'START', 'WALL', 'END', 'WALL'],
                [ 'WALL', 'FLOOR', 'WALL', 'FLOOR', 'WALL'],
                [ 'WALL', 'FLOOR', 'FLOOR', 'FLOOR', 'WALL'],
                [ 'WALL', 'WALL', 'WALL', 'WALL', 'WALL', ],
            ],
            scores: [
                {
                    name: 'bob',
                    moves: 7
                }
            ]
        });

        return one.validate();
    });

    it('fails validation when required fields missing', () => {
        const two = new Maze({
            matrix: []
        });
        return two.validate()
            .then( () => {
                throw new Error('expected validation error, did not receive one');
            },
            ({ errors }) => {
                assert.ok(errors.matrix);
            });
    });
});