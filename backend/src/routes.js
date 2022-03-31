const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/posts', PostController.listar);
routes.post('/posts', upload.single('image'), PostController.cadastrar);
routes.post('/posts/:id/like', LikeController.cadastrar);

module.exports = routes;