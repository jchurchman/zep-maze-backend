const request = require('./helpers/request');
const { assert } = require('chai');
const db = require('./helpers/db');
require('../../lib/connect');

describe('mazes REST api', () => {

    before( () => db.drop('mazes') );
    before( () => saveMaze(two) );
    before( () => saveMaze(three) );

    let one = {
        "matrix": [
            [ "WALL", "WALL", "WALL", "WALL", "WALL", ],
            [ "WALL", "START", "WALL", "END", "WALL"],
            [ "WALL", "FLOOR", "WALL", "FLOOR", "WALL"],
            [ "WALL", "FLOOR", "FLOOR", "FLOOR", "WALL"],
            [ "WALL", "WALL", "WALL", "WALL", "WALL", ]
        ]
    };

    let two = {
        matrix: [
            [ 'WALL', 'WALL', 'WALL', 'WALL', 'WALL', ],
            [ 'WALL', 'START', 'FLOOR', 'FLOOR', 'WALL'],
            [ 'WALL', 'FLOOR', 'WALL', 'FLOOR', 'WALL'],
            [ 'WALL', 'FLOOR', 'WALL', 'END', 'WALL'],
            [ 'WALL', 'WALL', 'WALL', 'WALL', 'WALL', ]
        ]
    };

    let three = {
        matrix: [
            [ 'WALL', 'WALL', 'WALL', 'WALL', 'WALL', ],
            [ 'WALL', 'START', 'FLOOR', 'FLOOR', 'WALL'],
            [ 'WALL', 'WALL', 'WALL', 'FLOOR', 'WALL'],
            [ 'WALL', 'END', 'FLOOR', 'FLOOR', 'WALL'],
            [ 'WALL', 'WALL', 'WALL', 'WALL', 'WALL', ]
        ]
    };

    function saveMaze(maze) {
        return request
            .post('/api/mazes')
            .send(maze)
            .then(({ body }) => {
                maze._id = body._id;
                maze.__v = body.__v;
                return body;
            });
    }

    it('saves a maze to the database', () => {
        return saveMaze(one)
            .then( savedMaze => {
                assert.isOk(savedMaze._id);
                assert.deepEqual(savedMaze.matrix, one.matrix);
            });
    });

    it('gets all mazes from the database', () => {

        return request.get('/api/mazes')
            .then(res => res.body)
            .then( mazes => {
                assert.equal(mazes.length, 3);
            });
    });

    it('gets a maze from the database by id', () => {
        return request.get(`/api/mazes/${one._id}`)
            .then(res => res.body)
            .then( maze => {
                assert.deepEqual(maze.matrix, one.matrix);
            });
    });

    it('deletes a maze from the database by id', () => {
        return request.delete(`/api/mazes/${one._id}`)
            .then(res => {
                assert.deepEqual(res.body, { removed: true });
            });
    });
});