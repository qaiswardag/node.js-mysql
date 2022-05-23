const {faker} = require('@faker-js/faker');
const mysql = require('mysql');

// init connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'join_us'
});

// // query
// const queryUsers = 'SELECT * FROM users';
// // run sql code
// connection.query(queryUsers, (error, results, fields) => {
//     if (error) throw error;
//     console.log('Error:', error)
//     console.log('results users:', results);
// });

// // query count
// const queryCount = 'SELECT COUNT(*) FROM users';
// // run sql code
// connection.query(queryCount, (error, results, fields) => {
//     if (error) throw error;
//     console.log('Error:', error)
//     console.log('results count:', results);
// });


// // insert data
// const person = {
//     email: faker.internet.email(),
//     created_at: faker.date.past()
// };
//
// var end_result = connection.query('INSERT INTO users SET ?', person, function (err, result) {
//     if (err) throw err;
//     console.log(result);
// });
//
//
// // query
// const queryUsers = 'SELECT * FROM users';
// // run sql code
// connection.query(queryUsers, (error, results, fields) => {
//     if (error) throw error;
//     console.log('Error:', error)
//     console.log('results users:', results);
// });


//
//
//
//
//
// insert 500 persons
const data = [];
for (var i = 0; i < 500; i++) {
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}


var query = 'INSERT INTO users (email, created_at) VALUES ?';

connection.query(query, [data], function (err, result) {
    console.log(err);
    console.log('result:', result);
});

// end connection
connection.end();
