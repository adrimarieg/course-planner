// USING MYSQL2 LIBRARY
const mysql = require('mysql2');

// GRANTING ACCESS TO PRIVATE SERVER
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// TESTING CONNECTION
connection.connect((err) => {
    if (err) {
        console.error('Error connection to the database: ', err);
        return;
    }
    console.log('Connected to the MySQL Database!');
});

// TESTING QUERIES ARE WORKING
connection.query('SELECT * FROM courses', (err, results) => {
    if (err) {
        console.error('Error executing query: ', err);
        return;
    }
    console.log('Results: ', results);

// PARSING THROUGH DATABASE
results.forEach((row) => {
    if (row.completed === 1) {
        console.log(row.course_name);
    } 
    })
});

connection.end();