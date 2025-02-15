const express = require('express');
const morgan = require('morgan');
const skinsRouter = require('./routes/skinsRouter');
const ballRouter = require('./routes/ballRouter');
const interfaceRouter = require('./routes/interfaceRouter');
const soundRouter = require('./routes/soundRouter');
const backroundRouter = require('./routes/backgroundRouter');
const categoryRouter = require('./routes/categoryRouter');
const app = express();

// ✅ Логирование запросов
app.use(morgan('dev'));

// ✅ Статические файлы
app.use(express.static('public'));

// ✅ Парсинг body (URL-кодированные данные + JSON)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/backgrounds', backroundRouter);
app.use('/api/skins', skinsRouter);
app.use('/api/balls', ballRouter);
app.use('/api/interfaces', interfaceRouter);
app.use('/api/sounds', soundRouter);
app.use('/api/categories', categoryRouter);

module.exports = app;
