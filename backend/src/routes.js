const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/Upload');
const sessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');


const routes =  express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', sessionController.store); 
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

module.exports = routes;