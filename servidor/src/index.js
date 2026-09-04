import express from 'express';
import colors from 'colors';
import path from 'path';
import {fileURLToPath} from 'url';

const puerto = 3000;
const app = express();

app.set('view engine', 'ejs'); // Configuramos motor de vista

// Configuramos vistas
const directorio = path.dirname(fileURLToPath(import.meta.url));
app.set('views', path.join(directorio, 'vistas'));
    console.log(directorio);

app.use(express.static(path.join(directorio, 'public'))); // Configuramos public
app.set(express.urlencoded({extend:false})); //Configuramos páginas estáticas

// Toma las rutas del proyecto
import {rinicio} from './rutas/rutaInicio.js';
app.use {rinicio};

app.listen(puerto, () => {
    console.log(`Servidor iniciando ${puerto}`.blue);
});