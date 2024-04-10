const express = require('express');
const dbConnection = require('../database/db');
const ticketRoutes = require('./routes/ticket.routes');
const sessionRoutes = require('./routes/session.routes');
require('dotenv').config();
const app = express();

const port = process.env.PORT;

dbConnection();

app.use(express.json());

app.use('/tickets', ticketRoutes);
app.use('/session', sessionRoutes);

app.listen(port, () => {
  console.log(`SERVER IS RUNNING ON http://localhost:${port}`);
});
