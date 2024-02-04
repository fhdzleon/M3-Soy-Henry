const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { url } = req;

    switch (url) {
      case "/":
        res.writeHead(200, { "Content-Type": "text/plain" });
        return res.end("Hola Mundo! \nYa estoy aqui");

      case "/students":
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(
          JSON.stringify([
            { id: 1, name: "Felipe" },
            { id: 2, name: "Karla" },
            { id: 3, name: "Zoe" },
            { id: 4, name: "Araceli" },
            { id: 5, name: "Lilo" },
          ])
        );

      case "/html":
        const html = fs.readFileSync(__dirname + "/src/index.html", "utf-8");
        res.writeHead(200, { "Content-Type": "text/html" });
        return res.end(html);

      case "/template":
        const template = fs.readFileSync(__dirname + "/src/template.html","utf-8");
        const nombre = "Lilo Maria"

        res.writeHead(200, { "Content-Type": "text/html" });
        return res.end(template.replace("{nombre}", nombre));

      default:
        res.writeHead(404);
        res.end();
    }
  })
  .listen(3001, "localhost");
