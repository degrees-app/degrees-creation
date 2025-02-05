const express = require('express');
const { Category } = require('../../db/models');
const categoryRouter = express.Router();

// Маршруты для Ball
categoryRouter.route('/').get(async (req, res) => {
  try {
    const categories = await Category.findAll();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
  }
});
// .post(async (req, res) => {
//   try {
//     const { type } = req.body;
//     const ba = await ball.create({ type });
//     return res.status(201).json(ba);
//   } catch (error) {
//     return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
//   }
// });

module.exports = categoryRouter;
