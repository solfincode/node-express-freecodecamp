const http = require("http");
const { readFileSync } = require("fs");

//get file
const home = readFileSync("./src/home.html");
const about = readFileSync("./src/about.html")

const server = http.createServer((req, res) => {
  console.log("server is running");
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write(home);
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write(about);
    res.end();
  }
});

server.listen(5000);
