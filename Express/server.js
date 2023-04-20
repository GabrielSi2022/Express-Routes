const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(routes);

// app.get("/", (req, res) => {
//   res.send(`
//   <form action="/" method="POST">
//   Nome: <input type="text" name="nome">
//   <button>Ola Mundo</button>
//   </form>
//   `);
// });

// app.get("/testes/:idUsuarios?/:parametro?", (req, res) => {
//   console.log(req.params);
//   console.log(req.query);
//   res.send(req.query.facebookprofile);
// });

// app.post("/", (req, res) => {
//   console.log(req.body);
//   res.send(`oque você me enviou foi:${req.body.nome}`);
// });

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
