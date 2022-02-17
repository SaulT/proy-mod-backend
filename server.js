require('dotenv').config();
const express = require('express');
// Importar las rutas de mi vista de Clientes
const clientRoutes = require('./routes/clientRoutes');

const productRoutes = require('./routes/productRoutes');

const app = express();

/* Middlewares (opcional) */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Rutas */
app.use('/api/v1', clientRoutes);
app.use('/api/v1', productRoutes);

/* Poner el servidor a escuchar */
app.listen(3000, ()=> {
    console.log('Server ON: 3000');
})