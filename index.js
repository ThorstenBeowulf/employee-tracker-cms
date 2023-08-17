require('dotenv').config();
const inquirer = require('inquirer');
const mysql = require('mysql2');



const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  console.log(`Connected to the ${process.env.DB_NAME} database.`)
);

inquirer.prompt(

)