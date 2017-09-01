const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    matrix: { type: Array, validate: validateMatrix },
    scores: [{
        name: {type: String}, 
        moves: {type: Number}
    }]
});

function validateMatrix (matrix){
    if(!matrix) return false;
    if(matrix.length < 5 ) return false;
    for(let i = 0; i < matrix.length; i++) {
        if(matrix[i].length !== matrix.length) return false;
    }
    return true;
}

module.exports = mongoose.model('Maze', schema);