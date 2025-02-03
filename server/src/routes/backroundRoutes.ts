import express from "express";
import Backround from "../../db/models/backround";

const router = express.Router();

// Получить все сохраненные страницы
router.get("/", async (req, res) => {
  try {
    const backgrounds = await Backround.get();
    res.json(backgrounds);
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
    res.status(500).json({ error: "Ошибка при загрузке данных" });
  }
});

// Сохранить новую страницу
router.post("/", async (req, res) => {
  try {
    const newBackground = await Backround.create(req.body);
    res.json(newBackground);
  } catch (error) {
    console.error("Ошибка при сохранении данных:", error);
    res.status(500).json({ error: "Ошибка при сохранении данных" });
  }
});

export default router;
