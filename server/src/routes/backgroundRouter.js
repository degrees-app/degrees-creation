const express = require('express');
const {Background} = require('../../db/models');
const backgroundRouter = express.Router();

// Маршруты для Background
backgroundRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const backgrounds = await Background.findAll();
      return res.status(200).json(backgrounds);
    } catch (error) {
      return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
    }
  })
  // .post(async (req, res) => {
  //   try {
  //     const { type } = req.body;
  //     const back = await background.create({ type });
  //     return res.status(201).json(back);
  //   } catch (error) {
  //     return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
  //   }
  // });

  module.exports = backgroundRouter;
