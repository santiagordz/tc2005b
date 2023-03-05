const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const filesystem = require("fs");

const rutasVideojuegos = require('./routes/videojuegos.routes')
const rutasComida = require('./routes/comidas.routes')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', 'views');

// USANDO RUTAS
app.use('/videojuegos', rutasVideojuegos)
app.use('/comidas', rutasComida)

// USANDO ARCHIVOS ESTATICOS
app.use('/', express.static(path.join(__dirname, '..', 'public')))

// 404
app.use('*', (req, res, next) => {
    res.send('Not Found')
})

app.listen(3000)