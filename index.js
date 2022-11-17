//cargar dependencias
let bodyParser = require("body-parser");
let express = require("express");

//cargar la confuguaracion de la aplicacion
let appConfig = require("./config");

//cargar enrutadores
let usuarioRouter = require("./routes/UsuariosRoutes");

//inicilaizar la app  web y la conexion a la base de datos
let dbConecctor = require("./db/dbConector");
let app = express();

//Registramos los enrerutadores
app.use("/usuarios", usuarioRouter);

//levantamos el servidor
app.listen(appConfig.PORT, function () {
    console.log(
        "la aplocacion esta escuchando en el puerto: " + appConfig.PORT
    );
});

console.log("hello word");
