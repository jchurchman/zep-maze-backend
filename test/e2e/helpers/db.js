const connection = require('mongoose').connection;
// const request = require('./request');

module.exports = {
    drop(collection) {
        return connection
            .collections[collection]
            .drop()
            .catch(error => {
                if(error.name !== 'MongoError' || error.message !== 'ns not found') throw error;
            });
    }
};