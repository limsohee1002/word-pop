//require sequelize and connect to the aws server, using MySQL
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
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