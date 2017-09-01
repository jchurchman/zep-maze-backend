const express = require('express');
const morgan = require('morgan');
const app = express();
const errorHandler = require('./errorHandler');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('./public'));

const mazes = require('./routes/mazes');
// const scores = require('./routes/scores');

app.use('/api/mazes', mazes);
// app.use('api/scores', scores);

app.use(errorHandler());

module.exports = app;
