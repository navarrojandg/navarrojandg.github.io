const express = require('express');
const createError = require('http-errors');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/intro', (req, res) => {
    res.sendFile(path.join(__dirname, 'intro.html'));
});

app.get('/browser', (req, res) => {
    res.sendFile(path.join(__dirname, 'browser.html'));
});

app.get('/nodejs', (req, res) => {
    res.sendFile(path.join(__dirname, 'nodejs.html'));
});

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
    res.render('error');
  });

module.exports = app;