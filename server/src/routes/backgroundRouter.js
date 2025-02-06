const express = require('express');
const fs = require('fs/promises');
const sharp = require('sharp');
const upload = require('../middlewares/multer');
const { Background } = require('../../db/models');

const backgroundRouter = express.Router();

// 📌 Сохранение фона (изображение + цвет)
backgroundRouter.post('/save', upload.single('file'), async (req, res) => {
  try {
    console.log('here');
    const { backgroundColor, brightness, contrast, animationColor, animationType } =
      req.body;

    let backgroundImage = null;
    if (req.file) {
      const fileName = `${Date.now()}.webp`;
      const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
      await fs.writeFile(`./public/img/${fileName}`, outputBuffer);
      backgroundImage = fileName;
    }

    const newBackground = await Background.create({
      backgroundImage,
      backgroundColor,
      brightness,
      contrast,
      animationColor,
      animationType,
    });

    res.json(newBackground);
  } catch (error) {
    console.error('Ошибка при сохранении фона:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// 📌 Получение фонов
backgroundRouter.get('/get', async (req, res) => {
  try {
    const backgrounds = await Background.findAll();
    res.json(backgrounds);
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

module.exports = backgroundRouter;
