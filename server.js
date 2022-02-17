require('dotenv').config();
const express = require('express');
// Importar las rutas de mi vista de Clientes
const clientRoutes = require('./routes/clientRoutes');

const app = express();

/* Middlewares (opcional) */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Rutas */
app.use('/api/v1', clientRoutes);

/* Poner el servidor a escuchar */
app.listen(3000, ()=> {
    console.log('Server ON: 3000');
})