const AlimentosOperaciones = require ("../operaciones/AlimentosOperaciones");
const router = require ("express").Router();

router.get("/",AlimentosOperaciones.ConsultarAlimento);
router.post("/",AlimentosOperaciones.CrearAlimento);

module.exports = router;

