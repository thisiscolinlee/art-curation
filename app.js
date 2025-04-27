require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const connectDb = require('./config/db');
//const cookieParser = require('cookie-parser');
//const methodOverride = require('method-override');

const app = express();
const port = process.env.PORT || 3000;

connectDb();

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('images'));
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded( { extended: true} ));

//app.use(cookieParser());
//app.use(methodOverride('_method'));

app.use('/', require('./routes/main'));
app.use('/', require('./routes/admin'));

/*
app.use((req, res, next) => { // 404 처리 부분
  res.status(404).send('일치하는 주소가 없습니다!');
  res.redirect('/');
});

app.use((err, req, res, next) => { // 에러 처리 부분
  console.error(err.stack); // 에러 메시지 표시
  res.status(500).send('에러.'); // 500 상태 표시 후 에러 메시지 전송
  res.redirect('/');
});
*/
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});