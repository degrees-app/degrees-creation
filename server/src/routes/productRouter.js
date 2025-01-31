const express = require('express');
const { Product } = require('../../db/models/');
const productRouter = express.Router();

productRouter.route('/').get(async (req, res) => {
  try {
    const products = await Product.findAll();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
  }
});

productRouter
  .route('/sound')
  .get(async (req, res) => {
    try {
      const products = await Product.findAll({ where: { category: 'sound' } });
      return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      const { title, fileName, desc } = req.body;
      const product = await Product.create({ title,category: 'sound', fileName, desc });
      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
    }
  });

productRouter
  .route('/interface')
  .get(async (req, res) => {
    try {
      const products = await Product.findAll({ where: { category: 'interface' } });
      return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      const { title, fileName, desc } = req.body;
      const product = await Product.create({
        title,
        category: 'interface',
        fileName,
        desc,
      });
      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
    }
  });

productRouter
  .route('/environment')
  .get(async (req, res) => {
    try {
      const products = await Product.findAll({ where: { category: 'environment' } });
      return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      const { title, fileName, desc } = req.body;
      const product = await Product.create({
        title,
        fileName,
        desc,
        category: 'environment',
      });
      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
    }
  });

productRouter
  .route('/entity')
  .get(async (req, res) => {
    try {
      const products = await Product.findAll({ where: { category: 'entity' } });
      return res.status(200).json(products);
    } catch (error) {
      return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      const { title, fileName, desc } = req.body;
      const product = await Product.create({ title, category: 'entity', fileName, desc });
      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
    }
  });

module.exports = productRouter;
