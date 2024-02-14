//Toma express desde node_modules
import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes.js';

//Crear la app 
const app = express();

//Routing
app.use('/', usuarioRoutes);

//Definir un puerto
const port = 3000;

app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`)
});

