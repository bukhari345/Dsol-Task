const mongoose = require('mongoose');

const DB = process.env.DB_CONNECTION_STRING;

mongoose.connect(DB, {
 
}).then(() => {
  console.log("Server connected successfully to MongoDB");
}).catch((err) => {
  console.log('No connection:', err);
});
