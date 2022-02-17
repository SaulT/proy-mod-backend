const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

router.post('/clients', (clientController.createClient));
router.get('/clients', (clientController.findAllClients));
router.get('/clients/:idClient', (clientController.findOneClient));
router.patch('/clients/:idClient', (clientController.updateOneClient));
router.delete('/clients/:idClient', (clientController.softDeleteOneClient));
router.delete('/clients/destroy/:idClient', (clientController.destroyOneClient));

module.exports = router;