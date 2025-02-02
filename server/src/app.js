const express = require('express');
const morgan = require('morgan');
const skinsRouter = require('./routes/skinsRouter');
const ballRouter = require('./routes/ballRouter');
const backgroundRouter = require('./routes/backgroundRouter');
const interfaceRouter = require('./routes/interfaceRouter');
const soundRouter = require('./routes/soundRouter');
const app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/skins', skinsRouter);
app.use('/api/balls', ballRouter);
app.use('/api/interfaces', interfaceRouter);
app.use('/api/backgrounds', backgroundRouter);
app.use('/api/sounds', soundRouter);

module.exports = app;
