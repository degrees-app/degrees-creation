const express = require('express');
const interfaceRouter = express.Router();
const { Interface } = require('../../db/models');


// Сохранение изображения с параметрами
interfaceRouter.post('/save', async (req, res) => {
  try {
    const { image, fontFamily, color } = req.body;
    const newInterface = await Interface.create({ image, fontFamily, color });
    res.json(newInterface);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Ошибка сохранения' });
  }
});

// Получение всех изображений
interfaceRouter.get('/get', async (req, res) => {
  try {
    const interface = await Interface.findAll();
    res.json(interface);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Ошибка получения данных' });
  }
});

module.exports = interfaceRouter;
