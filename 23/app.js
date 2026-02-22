var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const arviointiRouter = require('./routes/arviointi');
const opintojaksoRouter = require('./routes/opintojakso');
const opiskelijaRouter = require('./routes/opiskelija');

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
app.use('/api/arviointi', arviointiRouter);
app.use('/api/opintojakso', opintojaksoRouter);
app.use('/api/opiskelija', opiskelijaRouter);

module.exports = app;
