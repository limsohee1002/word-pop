//require sequelize and connect to the aws server, using MySQL
const Sequelize = require('sequelize');
require('dotenv').config()
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  logging: false, //stops sequelize from outputting sql to the terminal 
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
});

var isConnected = false; //var can be sent to the front end if the db is not working 

sequelize
.authenticate() //checks the connection to the database 
.then(() => {
  console.log('connected');
  isConnected = true;
})
.catch(err => console.error('not connected'));

exports.isConnected = isConnected;
exports.sequelize = sequelize;