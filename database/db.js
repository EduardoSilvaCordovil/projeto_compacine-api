const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MOGODB_URI);
    console.log('CONECTED WITH SERVER');
  } catch (err) {
    console.log('FAIL TO CONNECT WITH SERVER');
    process.exit(1);
  }
};

module.exports = dbConnection;
