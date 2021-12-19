const { createReadStream } = require("fs");

const stream = createReadStream("./data.txt",{encoding:"utf-8"});

stream.on("data", (result) => {
  console.log(result);
});
