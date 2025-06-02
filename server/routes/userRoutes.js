const express = require("express");
const router = express.Router();
const { saveOrUpdateUser } = require("../controllers/userController");

router.post("/user", saveOrUpdateUser);

module.exports = router;
