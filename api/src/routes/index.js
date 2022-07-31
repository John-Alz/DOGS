const { Router } = require('express');
const { getAllPerros, getDogId, newDog } = require('../controllers/dogs');
const { getTemperament } = require('../controllers/temperament');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


router.get("/dogs", getAllPerros)

router.get("/dogs/:idRaza", getDogId)

router.get("/temperament", getTemperament)

router.post("/dog", newDog)



module.exports = router;