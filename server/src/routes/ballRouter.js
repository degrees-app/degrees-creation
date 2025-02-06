const express = require('express');
const { Ball } = require('../../db/models');
const ballRouter = express.Router();

// Маршруты для Ball
ballRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const balls = await Ball.findAll({order: [['id', 'DESC']]});
      return res.status(200).json(balls);
    } catch (error) {
      return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      const { width, color,shape, opacity, author } = req.body;
      const ball = await Ball.create({
        width,
        color,
        shape,
        opacity,
        author
      });
      return res.status(201).json(ball);
    } catch (error) {
      return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
    }
  });
ballRouter.route('/:id').get(async (req, res) => {
  try {
    const { id } = req.params;
    const ball = await Ball.findOne({where:{id}});
    if (!ball) {
      return res.status(404).json({ text: 'Объект не найден' });
    }
    return res.status(200).json(ball);
  } catch (error) {
    return res.status(404).json({ text: 'Ошибка сервера', message: error.message });
  }
});

module.exports = ballRouter;
