const express = require('express');
const router = express.Router();
const jsonParser = require('body-parser').json();
const Maze = require('../models/maze');


router
    .use(jsonParser)

    .post('/', (req, res, next) => {
        const maze = new Maze(req.body);
        maze
            .save()
            .then( maze => res.send(maze) )
            .catch(next);
    });

module.exports = router;