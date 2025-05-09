// routes/quiz.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Ruta para actualizar progreso y respuestas
router.post("/save-progress", async (req, res) => {
  const { uid, progreso, respuestas } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { uid },
      { progreso, respuestas },
      { new: true, upsert: true }
    );
    res.status(200).json({ message: "Progreso guardado", user });
  } catch (error) {
    res.status(500).json({ message: "Error al guardar", error });
  }
});

module.exports = router;
