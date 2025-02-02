const express = require('express');
const { Sound } = require('../../db/models');
const soundRouter = express.Router();

// Маршруты для Sound
soundRouter.route('/sound').get(async (req, res) => {
  try {
    const sounds = await Sound.findAll();
    return res.status(200).json(sounds);
  } catch (error) {
    return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
  }
});
// .post(async (req, res) => {
//   try {
//     const { type } = req.body;
//     const s = await sound.create({ type });
//     return res.status(201).json(s);
//   } catch (error) {
//     return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
//   }
// });

module.exports = soundRouter;
