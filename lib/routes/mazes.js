const express = require('express');
const router = express.Router();
const jsonParser = require('body-parser').json();
const Maze = require('../models/maze');


router
    .use(jsonParser)

    .get('/', (req, res, next) => {
        Maze.find()
            .lean()
            .select('-__v')
            .then(mazes => res.send(mazes))
            .catch(next);
    })

    .post('/', (req, res, next) => {
        const maze = new Maze(req.body);
        maze
            .save()
            .then( maze => res.send(maze) )
            .catch(next);
    });

module.exports = router;