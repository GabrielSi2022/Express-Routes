exports.paginaInicial = (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome: <input type="text" name="nome">
  <button>Ola Mundo</button>
  </form>
  `);
};

exports.trataPost = (req, res) => {
  res.send("sou sua nova rota de post");
};
