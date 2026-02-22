var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const bookRouter = require('./routes/book');
const borrowerRouter = require('./routes/borrower');
const userRouter = require('./controllers/userController');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  console.log('The common middleware called');
  next();
});

app.use('/', indexRouter);
app.use('/api/books', bookRouter);
app.use('/api/borrower', borrowerRouter);
app.use('/api/user', userRouter);

module.exports = app;
