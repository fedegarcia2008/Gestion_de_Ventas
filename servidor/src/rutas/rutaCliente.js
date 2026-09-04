import express from 'express';
const rcliente = express.Router();

rcliente.get('/cliente', (pet, resp)=>{
    resp.render('cliente')
});

export {rcliente}