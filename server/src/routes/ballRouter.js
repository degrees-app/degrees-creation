const express = require('express');
const ball = require('../../db/models/ball');
const ballRouter = express.Router();

// Маршруты для Ball
ballRouter
  .route('/ball')
  .get(async (req, res) => {
    try {
      const balls = await ball.findAll();
      return res.status(200).json(balls);
    } catch (error) {
      return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      const { type } = req.body;
      const ba = await ball.create({ type });
      return res.status(201).json(ba);
    } catch (error) {
      return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
    }
  });

module.exports = ballRouter;
