const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

const connectionURL = "mongodb+srv://mau:mau@cluster0.fvyb6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const databaseName = "BASEWEB";

// Ruta principal
app.get('/', (req, res) => {
    res.send('Servidor Express conectado a MongoDB');
});

// Ruta para obtener datos de la colección Project
app.get('/projects', async (req, res) => {
    try {
        const client = await MongoClient.connect(connectionURL);
        const db = client.db(databaseName);
        const results = await db.collection('Project').find({}).toArray();
        await client.close();
        res.json(results);
    } catch (error) {
        console.error("Error en /projects:", error);
        res.status(500).send('Error al consultar la base de datos');
    }
});

// Iniciar servidor
app.listen(3700, () => {
    console.log('Servidor corriendo en http://localhost:3700');
});
