const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");

const menuRoute = require("./routes/menu.routes");
app.use(menuRoute);

const preguntasRoute = require("./routes/preguntas.routes");
app.use("/preguntas", preguntasRoute);

app.listen(3000);
