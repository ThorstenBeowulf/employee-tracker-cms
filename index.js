require("dotenv").config();
const inquirer = require("inquirer");
const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log(`Connected to the ${process.env.DB_NAME} database.`)
);

const menuPrompt = () =>
  inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "Welcome Main Menu",
        choices: [
          { name: "View all departments", value: 0 },
          { name: "view all roles", value: 1 },
          { name: "view all employees", value: 2 },
          { name: "add a department", value: 3 },
          { name: "add a role", value: 4 },
          { name: "add an employee", value: 5 },
          { name: "update an employee manager", value: 6 },
          { name: "exit", value: 7 },
        ],
      },
    ])
    .then(({ menu }) => {
      console.log(menu);
      switch (menu) {
        case 0:
          const sql = `SELECT * FROM departments`;
          db.query(sql, function (err, results, fields) {
            console.table(results);
          });
          break;
        case 0:
          sql = `SELECT * FROM roles`;
          db.query(sql, function (err, results, fields) {
            console.table(results);
          });
          break;
        case 0:
          sql = `SELECT * FROM employees`;
          db.query(sql, function (err, results, fields) {
            console.table(results);
          });
          break;
      }
    })
    .then(() => menuPrompt());

menuPrompt();

// connection.query(
//   'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
//   function (err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );
//

// db.query("SELECT * roles");

// db.query("SELECT * employees");

// db.query("INSERT INTO department");

// db.query("INSERT INTO role");

// db.query("INSERT INTO employees");

// db.query("UPDATE manager_id IN employees.id ");
