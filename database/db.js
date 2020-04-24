const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect(err => {
    if (err) {
        throw err;
    } else {
        console.log('Connection established');
    }
});

module.exports = {getAllReviews, addAReview};