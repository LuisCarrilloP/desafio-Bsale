const { createPool } = require('mysql');
const database = require('./database.utils') 

const newPool = createPool(database.db); //createConnection vulnerable to shutdowns

module.exports = newPool;