const express = require("express");
const morgan = require("morgan");
const productRouter = require("./routes/productRouter");
const backroundRouter = require("./routes/backroundRouter");

const app = express();

// ✅ Логирование запросов
app.use(morgan("dev"));

// ✅ Статические файлы
app.use(express.static("public"));

// ✅ Парсинг body (URL-кодированные данные + JSON)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ✅ Роуты (CORS уже подключен, поэтому ошибки не будет)
app.use("/api/products", productRouter);
app.use("/api/backround", backroundRouter);

module.exports = app;
