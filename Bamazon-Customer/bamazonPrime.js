var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Jpr8353!",
  database: "bamazon"
});



connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  start();
});

var totalPrice = 0;
function start() {
  inquirer
    .prompt([
      {
        name: "whichProduct",
        type: "input",
        message: "Which product ID would you like to purchase? (1-10)"
      },
      {
        name: "howMany",
        type: "input",
        message: "How many units would you like?"
      }
    ])
    .then(answers => {
      connection.query("SELECT * FROM products WHERE item_id = ?", [answers.whichProduct], function (error, results) {
        if (results.length === 0) {
          console.log("Please enter a value between 1 and 10... Learn to follow directions! Hehe.");
          start();
        } else {
          const row = results[0];
          console.log("You've selected: " + row.product_name + ".");
          if (row.stock_quantity < answers.howMany) {
            console.log("Sorry, we only have " + row.stock_quantity + " of those in stock. Don't ask for so many next time, sheesh!");
            start();
          } else {
            connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?", [row.stock_quantity - answers.howMany, answers.whichProduct], function () {
              totalPrice += answers.howMany * row.price;
              console.log("Your total purchase comes to: $" + (totalPrice).toFixed(2));
              inquirer.prompt([
                {
                  name: "isThereMore",
                  type: "confirm",
                  message: "Anything else you'd like to order?"
                }
              ])
              .then(answers => {
                if (answers.isThereMore) {
                  start();
                } else {
                  console.log("Thank you for shopping at BAMAZON!");
                  start();
                }
              })
            });
          }
        }
      });
    });
};