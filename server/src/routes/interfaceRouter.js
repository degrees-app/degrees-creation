const express = require('express');
const interfaceRouter = express.Router();
const { Interface } = require('../../db/models');
const fs = require('fs/promises');
const sharp = require('sharp');
const upload = require('../middlewares/multer');
// const path = require('path');

// Сохранение изображения с параметрами
interfaceRouter.post('/save', upload.single('file'), async (req, res) => {
  try {
    const { fontFamily, color } = req.body;
    if (!req.file) {
      return res.status(400).json({ error: 'Файл не загружен' });
    }
    const name = `${Date.now()}.webp`;
    const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
    await fs.writeFile(`public/img/${name}`, outputBuffer);
    const newInterface = await Interface.create({
      image: name,
      fontFamily,
      color,
    });
    return res.json(newInterface);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Ошибка сохранения' });
  }
});

// Получение всех изображений
interfaceRouter.get('/get', async (req, res) => {
  try {
    const interface = await Interface.findAll({order: [['id', 'DESC']]});
    res.json(interface);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Ошибка получения данных' });
  }
});

module.exports = interfaceRouter;
