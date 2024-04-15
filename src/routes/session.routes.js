const express = require('express');
const SessionController = require('../controllers/session.controller');

const router = express.Router();

router.post('/', SessionController.createSession);
router.get('/', SessionController.getSession);
router.get('/:id', SessionController.getSession);
router.put('/:id', SessionController.uptadeSession);
router.delete('/:id', SessionController.deleteSession);

module.exports = router;
