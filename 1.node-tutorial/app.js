//import module
const sayHi = require("./modules/utils");
const names = require("./modules/variables");
const flavor = require("./modules/flavor");
//built in module
const os = require("os");
const path = require("path");
const { readFileSync, writeFileSync } = require("fs");
const http = require("http");

//execute function
sayHi("susan");
sayHi(names.john);

console.log(flavor);

// built in module
//1. os
const user = os.userInfo();
console.log(user);
console.log(`system uptime is ${os.uptime()} seconds`);

//2.path module
const filePath = path.join("/files", "test.txt");
console.log(filePath);

const basename = path.basename(filePath);
console.log("base name is", basename);

//3.fs module
const testFile = readFileSync("./files/test.txt", "utf-8");
console.log(testFile);
//create new file
writeFileSync(
  "./files/result.txt",
  `this is written by nodejs built in module: ${testFile}`
);

//4. http module
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our webpage");
  } else if (req.url === "/about") {
    res.end("welcome to about webpage");
  }
  res.end(`404`);
});

server.listen(8000, () => console.log("server is listening at 8000"));
