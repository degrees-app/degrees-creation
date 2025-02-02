const express = require('express');
const { Skin } = require('../../db/models');
const skinsRouter = express.Router();

// Маршруты для Skin
skinsRouter.route('/skins').get(async (req, res) => {
  try {
    const skins = await Skin.findAll();
    return res.status(200).json(skins);
  } catch (error) {
    return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
  }
});
// .post(async (req, res) => {
//   try {
//     const { title } = req.body;
//     const sk = await skin.create({ title });
//     return res.status(201).json(sk);
//   } catch (error) {
//     return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
//   }
// });

module.exports = skinsRouter;
