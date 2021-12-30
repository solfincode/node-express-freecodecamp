const express = require("express");
const PORT = 8000;
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
const HomeRoute = require("./routes/home");
const TodosRoute = require("./routes/todos");

app.use("/", HomeRoute);
app.use("/", TodosRoute);

//server listening
app.listen(PORT, () => console.log(`server is listening at ${PORT}`));
