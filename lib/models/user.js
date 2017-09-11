const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const Maze = require('./maze');

const schema = new Schema({
    email: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    progress: [{
        score: { type: String },
        maze: { type: String }
    }]
});

schema.method('generateHash', function(password) {
    this.hash = bcrypt.hashSync(password, 8);
});

schema.method('comparePassword', function(password) {
    return bcrypt.compareSync(password, this.hash);
});



module.exports = mongoose.model('User', schema);