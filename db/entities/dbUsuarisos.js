//cargando las dependencias
let appConfig = require("../../config");
let dbConecctor = require("../dbConector");

//cargando variables de configuracion
let collectionName = "usuarios";

//funciones
async function createUsuario(usuario) {
    //funcines asincrinas

    try {
        let db = dbConecctor.db(appConfig.dbName);
        let collection = db.collection(collectionName);
        let result = await collection.insertOne(usuario);

        return result;
    } catch (ex) {
        console.log(ex);
        return {};
    }
}

async function getAllUsuario(usuario) {
    //funcines asincrinas

    try {
        let db = dbConecctor.db(appConfig.dbName);
        let collection = db.collection(collectionName);
        let result = [];
        let cursor = collection.find({});
        let currentUsuario = await cursor.next();
        while (currentUsuario != null) {
            result.push(currentUsuario);
            currentUsuario = await cursor.next();
        }

        return result;
    } catch (ex) {
        console.log(ex);
        return [];
    }
}

module.exports = {
    collectionName,
    createUsuario,
    getAllUsuario,
};
