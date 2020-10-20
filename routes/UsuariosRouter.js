const UsuariosController = require('../constrollers/UsuariosController.js');
const express = require('express');
const router = express.Router();



router.get('/usuarios', UsuariosController.index);

module.exports = router;