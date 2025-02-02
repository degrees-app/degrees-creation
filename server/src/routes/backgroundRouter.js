const express = require('express');
const background = require('../../db/models/background');
const backgroundRouter = express.Router();

// Маршруты для Background
backgroundRouter
  .route('/background')
  .get(async (req, res) => {
    try {
      const backgrounds = await background.findAll();
      return res.status(200).json(backgrounds);
    } catch (error) {
      return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      const { type } = req.body;
      const back = await background.create({ type });
      return res.status(201).json(back);
    } catch (error) {
      return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
    }
  });

  module.exports = backgroundRouter;
