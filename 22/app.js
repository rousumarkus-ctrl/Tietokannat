var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const bookRouter = require('./routes/book');
const borrowerRouter = require('./routes/borrower');

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
app.use('/users', usersRouter);
app.use('/api/books', bookRouter);
app.use('/api/borrower', borrowerRouter);

module.exports = app;
