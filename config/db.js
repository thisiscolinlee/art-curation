const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`MongoDB connection error: ${err.message}`);
    process.exit(1); // 연결 실패하면 서버 아예 끄기
  }
};

module.exports = connectDb;