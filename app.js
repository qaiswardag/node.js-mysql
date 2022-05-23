const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'join_us'
});

const query = 'SELECT * FROM test';
connection.query(query, (error, results, fields) => {
    if (error) throw error;

    try {
        console.log('results: ', results);
    } catch (err) {
        console.log('there have been an error. Error is:', err)
    }
});


// end connection
connection.end();
