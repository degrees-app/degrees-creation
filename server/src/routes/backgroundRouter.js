const express = require('express');
const backroundRouter = express.Router();
const { Backround } = require('../../db/models');


// Сохранение изображения с параметрами
backroundRouter.post('/save', async (req, res) => {
  try {
    const { image, fontFamily, color } = req.body;
    const newBackround = await Backround.create({ image, fontFamily, color });
    res.json(newBackround);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Ошибка сохранения' });
  }
});

// Получение всех изображений
backroundRouter.get('/get', async (req, res) => {
  try {
    const backround = await Backround.findAll();
    res.json(backround);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка получения данных' });
  }
});

module.exports = backroundRouter;
