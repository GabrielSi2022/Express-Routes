const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const contatoController = require("./src/controllers/contatoController");

function meuMiddleware(req, res) {
  req.session = { nome: "Gabriel", sobrenome: "Henrique" };
  console.log();
  console.log("Passei no seu middleware");
  console.log();
  next();
}

//Rotas da HOME
route.get("/", homeController.paginaInicial);
route.post("/", homeController.trataPost);

//Rotas de contato
route.get("/contato", contatoController.paginaInicial);
module.exports = route;
