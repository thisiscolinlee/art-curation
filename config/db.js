const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
require('dotenv').config();

const connectDb = asyncHandler( async() => {
  const connect = await mongoose.connect(process.env.MONGODB);
});

module.exports = connectDb;