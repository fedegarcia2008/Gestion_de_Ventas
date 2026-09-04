import express from 'express';
import {rcliente} from './rutaCliente.js';


const rinicio = express.Router();

rinicio.get('/', (pet, resp) => {
    resp.render('index');
});

rinicio.use(rcliente)

export {rinicio};