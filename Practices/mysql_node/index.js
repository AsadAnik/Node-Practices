const express = require('express');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 5000;

/**
 * ----- Connecting MySQL with node ----
 * with (test_node) database of mysql.
 * first create database into mysql.
 * then make root users password to (12345678).
 * in MySQL v8 need's to change password of root user.
 * change with -- ALTER USER 'user'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345678';
 * **/

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // database: 'test_node',
    user: 'root',
    password: '12345678'
});

// connect..
connection.connect(function(err){
    if (err) throw err;
    console.log("------ MySQL Connected -------");

    // connection.query("CREATE DATABASE test_node", function(err, result){
    //     if (err) throw err;
    //     console.log('Database created!');
    // });
});


/** 
 *  ------- MySQL ------
 * if shows no database selected so give database also with table.
 * like ('database_name'.'table_name').
 * **/

const createDatabaseSQL = "CREATE DATABASE test_node";
const createTableSQL = "CREATE TABLE test_node.customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(200), address VARCHAR(255))";

const insertSQL = "INSERT INTO test_node.customers (name, address) VALUES ('Asad Anik', 'Feni Bangladesh')";
const readSQL = "SELECT * FROM test_node.customers";
const updateSQL = "UPDATE test_node.customers SET address = 'London UK'";
const deleteSQL = "DELETE FROM test_node.customers WHERE address = 'Feni Bangladesh'";

// if run once for just create database, then comment-in..
connection.query(readSQL, function(err, result){
    if (err) throw err;
    console.log('DONE!');
    console.log(result);
});


/**
 *  ------- Closing MySQL Connection -------
 * **/

connection.end(function(err){
    if (err) throw err;
    console.log('------ Closed MySQL Connection -------');
});


// !important! 
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv 

app.get('/' , (req , res)=>{
   res.send('hello from simple server :)');
});

app.listen(port , ()=> console.log('> Server is up and running on port : ' + port));