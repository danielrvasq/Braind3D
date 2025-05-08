// models/User.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  nombre: {
    type: String,
  },
  correo: {
    type: String,
  },
  progreso: {
    type: Number,
    default: 0,
  },
  respuestas: {
    type: [String], // Puedes usar objetos si necesitas más detalle
    default: [],
  },
  puntaje: {
    type: Number,
    default: 0,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
