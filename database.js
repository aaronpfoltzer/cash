var Sequelize = require('sequelize');
var sequelize = new Sequelize('cash', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});


var Transaction = sequelize.define('transaction', {
  amount: Sequelize.BIGINT,
})