const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors=require('cors')
const logger = require('morgan');
const mongoose=require('mongoose')

const usersRouter = require('./routes/users');
const adminRouter = require('./routes/admin');

const app = express();

// db connection
mongoose.connect('mongodb://localhost:27017/',{useNewUrlParser:true}).then((response)=>{
  console.log('Connected to database');
}).catch((err)=>{
  console.log(`Database connection error ${err}`);
})

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', usersRouter);
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
