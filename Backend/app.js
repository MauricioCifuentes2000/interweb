// app.js
const express = require('express');
const app = express();

// Middlewares para leer body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cargar rutas
const project_routes = require('./routes/project');

// Rutas base
app.use('/api', project_routes);

// Puerto
const PORT = 3700;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;


/*
var express =require('express');
var bodyParser= require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.status(200).send(
        "<h1> Pag de inicio </h1>"
    );
})

app.get('/test',(req,res) => {
    res.status(200).send({
        message: "Hola mundo desde mi api de nodejs"
    })
})

module.exports = app;*/