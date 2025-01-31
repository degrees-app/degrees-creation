const express = require('express');
const { Skin, Ball, Interface, Background, Sound } = require('../../db/models/');
const productRouter = express.Router();

// Маршруты для Skin
productRouter
  .route('/skin')
  .get(async (req, res) => {
    try {
      const skins = await Skin.findAll();
      return res.status(200).json(skins);
    } catch (error) {
      return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      const { title } = req.body;
      const skin = await Skin.create({ title });
      return res.status(201).json(skin);
    } catch (error) {
      return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
    }
  });

// Маршруты для Ball
productRouter
  .route('/ball')
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
      const { name, categoryId } = req.body; // Добавьте categoryId, если необходимо
      const ball = await Ball.create({ name, categoryId });
      return res.status(201).json(ball);
    } catch (error) {
      return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
    }
  });

// Маршруты для Interface
productRouter
  .route('/interface')
  .get(async (req, res) => {
    try {
      const interfaces = await Interface.findAll();
      return res.status(200).json(interfaces);
    } catch (error) {
      return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      const { name, interfaceType, categoryId } = req.body; // Добавьте categoryId, если необходимо
      const interfaceItem = await Interface.create({ name, interfaceType, categoryId });
      return res.status(201).json(interfaceItem);
    } catch (error) {
      return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
    }
  });

// Маршруты для Background
productRouter
  .route('/background')
  .get(async (req, res) => {
    try {
      const backgrounds = await Background.findAll();
      return res.status(200).json(backgrounds);
    } catch (error) {
      return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      const { name, backgroundType, categoryId } = req.body; // Добавьте categoryId, если необходимо
      const background = await Background.create({ name, backgroundType, categoryId });
      return res.status(201).json(background);
    } catch (error) {
      return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
    }
  });

// Маршруты для Sound
productRouter
  .route('/sound')
  .get(async (req, res) => {
    try {
      const sounds = await Sound.findAll();
      return res.status(200).json(sounds);
    } catch (error) {
      return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      const { name, soundType, categoryId } = req.body; // Добавьте categoryId, если необходимо
      const sound = await Sound.create({ name, soundType, categoryId });
      return res.status(201).json(sound);
    } catch (error) {
      return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
    }
  });

module.exports = productRouter;
