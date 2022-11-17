//cargamos la dependencia de bases de datos

let dbUsuarios = require("../db/entities/dbUsuarisos");
//Inicializamos router
let router = require("express").Router();

router.get("/", function (req, res) {
    res.send("hello word");
});

router.get("/all", async function (req, res) {
    let result = await dbUsuarios.getAllUsuario();
    res.json(result);
});

module.exports = router;
