const http = require("http");

http.createServer(router).listen(3000);

function router(req, res) {
  console.log("Nueva peticion ✅");
  console.log(req.url);
  switch (req.url) {
    case "/hola":
      res.write("Utilizando HTTP con NodeJS");
      res.end();
      break;

    default:
      res.write("Error 404");
      res.end();
      break;
  }
}

console.log("Ejecutando en puerto 3000");
