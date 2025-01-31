const express = require('express');
const morgan = require('morgan');
const productRouter = require('./routes/productRouter');
const app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/products',productRouter );

module.exports = app;
