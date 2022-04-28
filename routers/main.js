//llamer al router de express
const express = require("express");
const router = express.Router();

//lamar al controlador
const mainController = require("../controllers/mainController");

//Crear las rutas para / y para /about y ejecuta un metodo del controlador 
router.get("/",mainController.index);
router.get("/about", mainController.about);

//exportar el router
module.exports = router;