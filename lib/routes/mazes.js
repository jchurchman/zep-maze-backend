const express = require('express');
const router = express.Router();
const Maze = require('../models/maze');


router
    .post('/', (req, res, next) => {
        const maze = new Maze(req.body);
        maze
            .save()
            .then( maze => res.send(maze) )
            .catch(next);
    });

module.exports = router;