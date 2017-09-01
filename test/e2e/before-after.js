const connect = require('../../lib/connect');
const { execSync } = require('child_process');

let connection = null;

before(() => {
    return connect('mongodb://localhost:27017/zep-maze-test')
        .then(cn => connection = cn);
});

before(() => connection.dropDatabase());

after(() => connection.close());