const http = require("http");

const server = http.createServer((req, res) => {
  console.log("create server");
  if (req.url === "/") {
    res.end("home page");
  }
});

server.listen(8080, () => {
  console.log("server is listening at port 8080");
});
