const express = require('express');
const morgan = require('morgan');
const productRouter = require('./routes/productRouter');
const backroundRouter = require('./routes/backroundRouter');
const skinsRouter = require('./routes/skinsRouter');
const ballRouter = require('./routes/ballRouter');
const interfaceRouter = require('./routes/interfaceRouter');
const soundRouter = require('./routes/soundRouter');
const app = express();

// ✅ Логирование запросов
app.use(morgan('dev'));

// ✅ Статические файлы
app.use(express.static('public'));

// ✅ Парсинг body (URL-кодированные данные + JSON)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ✅ Роуты (CORS уже подключен, поэтому ошибки не будет)
app.use('/api/products', productRouter);
app.use('/api/backround', backroundRouter);
app.use('/api/skins', skinsRouter);
app.use('/api/balls', ballRouter);
app.use('/api/interfaces', interfaceRouter);
app.use('/api/sounds', soundRouter);

module.exports = app;
