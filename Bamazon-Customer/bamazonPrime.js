var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Jpr8353!",
    database: "top_songsdb"
  });

  inquirer.prompt([/* Pass your questions in here */]).then(answers => {
    // Use user feedback for... whatever!!
});