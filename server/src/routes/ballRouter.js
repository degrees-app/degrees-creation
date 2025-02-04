const express = require('express');
const { Ball } = require('../../db/models');
const ballRouter = express.Router();

// Маршруты для Ball
ballRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const balls = await Ball.findAll();
      return res.status(200).json(balls);
    } catch (error) {
      return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      const { lineType, width, dashed, color, dashScale, dashGap, shape } = req.body;
      const ball = await Ball.create({
        lineType,
        width,
        dashed,
        color,
        dashScale,
        dashGap,
        shape,
      });
      return res.status(201).json(ball);
    } catch (error) {
      return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
    }
  });
ballRouter.route('/:id').put(async (req, res) => {
  try {
    const { id } = req.params;
    const ball = await Ball.findByPk(id);
    if (!ball) {
      return res.status(404).json({ text: 'Объект не найден' });
    }
    return res.status(200).json(ball);
  } catch (error) {
    return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
  }
});

module.exports = ballRouter;
