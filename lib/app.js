const express = require('express');
const morgan = require('morgan');
const app = express();
const errorHandler = require('./errorHandler');

app.use(morgan('dev'));
app.use(express.static('./public'));

const mazes = require('./routes/mazes');
// const scores = require('./routes/scores');

app.use('/api/mazes', mazes);
// app.use('api/scores', scores);

app.use((req, res) => {
    res.sendFile('index.html', {
        root: './public/',
    });
});

app.use(errorHandler());

module.exports = app;
