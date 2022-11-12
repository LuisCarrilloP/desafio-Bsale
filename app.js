const express = require("express")
const routes = require('./routes/index.routes');

//Ejecutar express
const app = express()

//Permitir json
app.use(express.json())

//Endpoint base
app.use('/api/v1', routes);

//Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Some custom error!', err.message);
  next(err);
});


module.exports = { app }