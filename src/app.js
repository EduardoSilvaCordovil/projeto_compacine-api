const express = require('express');
const dbConnection = require('../database/db');
const ticketRoutes = require('./routes/ticket.routes');
const movieRoutes = require('./routes/movie.routes')
require('dotenv').config();
//const bodyParser = require('bodyParser');
const app = express();

const port = process.env.PORT;

dbConnection();

app.use(express.json());

app.use('/tickets', ticketRoutes);
app.use('/movies', movieRoutes);

app.listen(port, () => {
  console.log(`SERVER IS RUNNING ON http://localhost:${port}`);
});
