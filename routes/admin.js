const express = require('express');
const router = express.Router();
const adminLayout = '../views/layouts/main';
const asyncHandler = require('express-async-handler');

/*
const Post = require('../models/post');
const User = require('../models/user');
const StudentInfo = require('../models/studentinfo');
const ClassOrder = require('../models/classorder');
*/
const jwtSecret = process.env.JWT_SECRET;



module.exports = router;
