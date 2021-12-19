const EventEmitter = require("events");
const customEvent = new EventEmitter();

// listen event and define it
customEvent.on("response", (name, id) => {
  console.log(`data is received from ${name} and ${id}`);
});

//pull the trigger of response event emitter
customEvent.emit("response", "david", 20);
