const express = require('express');
const router = express.Router();
const jsonParser = require('body-parser').json();
const Maze = require('../models/maze');


router
    .use(jsonParser)

    .get('/:id', (req, res, next) => {
        Maze.findById(req.params.id)
            .lean()
            .then( maze => {
                if (!maze) throw res.status(404).send(`Cannot GET ${req.params.id}`);
                res.send(maze);
            })
            .catch(next);
    })

    .get('/', (req, res, next) => {
        Maze.find()
            .lean()
            .select('_id')
            .then(mazes => res.send(mazes))
            .catch(next);
    })

    .post('/', (req, res, next) => {
        const maze = new Maze(req.body);
        maze
            .save()
            .then( maze => res.send(maze) )
            .catch(next);
    })

    .delete('/:id', (req, res, next) => {
        Maze.remove()
            .where({ _id: req.params.id})
            .then( response => {
                res.send({ removed: response.result.n === 1});
            })
            .catch(next);
    });

module.exports = router;