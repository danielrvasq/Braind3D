const express = require("express");
const router = express.Router();
const QuizResult = require("../models/User"); // Asegúrate que la ruta es correcta

// Ruta POST para guardar resultado del quiz
router.post("/save", async (req, res) => {
  try {
    const { userId, percentageCompleted, score, timeTaken } = req.body;

    const newResult = new QuizResult({
      userId,
      percentageCompleted,
      score,
      timeTaken,
    });

    await newResult.save();
    res.status(201).json({ message: "Resultado guardado correctamente" });
  } catch (error) {
    console.error("Error al guardar resultado:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
});

module.exports = router;
