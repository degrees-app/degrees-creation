const express = require('express');
const interface = require('../../db/models/interface');
const interfaceRouter = express.Router();

// Маршруты для Interface
interfaceRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const interfaces = await interface.findAll();
      return res.status(200).json(interfaces);
    } catch (error) {
      return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      const { type } = req.body;
      const interfaceItem = await interface.create({ type });
      return res.status(201).json(interfaceItem);
    } catch (error) {
      return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
    }
  });

module.exports = interfaceRouter;
