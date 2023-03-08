const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }));

const homeRoute = require('./routes/home.routes')
const nuevaRoute = require('./routes/nueva.routes')

// app.get('/nueva', nuevaRoute)
app.get('/', homeRoute)
app.get('/nueva', nuevaRoute)

app.listen(3000);
