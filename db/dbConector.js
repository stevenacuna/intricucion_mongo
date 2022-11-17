const { MongoClient } = require("mongodb");
const appConfig = require("../config");

var clientMongo = new MongoClient(appConfig.connectionString);

let promiseConnect = clientMongo.connect();

promiseConnect
    .then(function (client) {
        clientMongo = client;
        console.log("Connected to Mongo DB services");
    })
    .catch(function (err) {
        console.log(err);
        console.log("Error onnecting with Mongo DB services");
    });

module.exports = clientMongo;
