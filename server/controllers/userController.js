const User = require("../models/User");

const saveOrUpdateUser = async (req, res) => {
  const { uid, nombre, correo, progreso, respuestas, puntaje } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { uid },
      { nombre, correo, progreso, respuestas, puntaje },
      { upsert: true, new: true }
    );

    res.status(200).json(user);
  } catch (error) {
    console.error("Error al guardar usuario:", error);
    res.status(500).json({ message: "Error al guardar usuario" });
  }
};

module.exports = {
  saveOrUpdateUser,
};
