const express = require('express');
const router = express.Router();

const mainLayout = '../views/layouts/main.ejs';
const asyncHandler = require('express-async-handler');

const ObjectID = require('../models/objectid');

router.get(['/', '/home'], asyncHandler(async (req, res) => {
  const locals = { title: 'Art Curation' };
  const data = '1';
  res.render('home', { locals, data, layout: mainLayout });
}));

router.get('/dev', asyncHandler(async (req, res) => {
  const locals = { title: 'Art Curation' };
  const data = '1';
  res.render('home', { locals, data, layout: mainLayout });

  try {
    const newObj = new ObjectID({
      name: 'Sample Object',
      type: 'painting',
      relativePosition: {
        x: 1.5,
        y: 3.2,
        z: 0.0,
      }
    });

    await newObj.save();
    res.send('Object 저장 완료!');
  } catch (err) {
    console.error(err);
    res.status(500).send('저장 실패');
  }
}));

module.exports = router;