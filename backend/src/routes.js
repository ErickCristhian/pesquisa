const express = require('express');
const multerConfig = require('./config/multer');
const UserController = require('./controllers/UserController');
const AtasController = require('./controllers/AtasController');
const SessionController = require('./controllers/SessionController');
const multer = require('multer');

const routes = express.Router();

/** Multer Exemplo
  router.post('/test', multer(multerConfig).single('file'), (req, res) => {
    return res.json({success: "deu bom"});
});
 */

/* Rotas de Usuários */
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

/*Rotas dos documentos AtasController.index*/
routes.get('/atas/:page', AtasController.index);
routes.get('/ata/:id', AtasController.ata);

routes.post('/ata/:id', AtasController.edit);
routes.post('/ata/delete/:id', AtasController.delete);

routes.get('/search/:busca', AtasController.search);

routes.post('/ata', multer(multerConfig).single('file'), AtasController.store);

/*Rota de Sessão */

routes.post('/sessions', SessionController.create);

module.exports = routes;