const express = require('express');
var app = express();
const router = express.Router();

const mainLayout = '../views/layouts/main.ejs';
//const Post = require('../models/post');
const asyncHandler = require('express-async-handler');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());






router.get(
  ['/', '/home'], 
  asyncHandler(async (req,res) => {
  const locals = {
    title: 'Art Curation'
  }  
  //const data = await Post.find();
  const data = '1';
  res.render('home', { locals, data, layout: mainLayout });
  })
);



module.exports = router;