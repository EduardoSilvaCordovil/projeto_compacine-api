const express = require('express');
const SessionController = require('../controllers/session.controller');

const router = express.Router();

router.post('/session', SessionController.createSession);
router.get('/session', SessionController.getSession);
router.get('/sessions:id', SessionController.getSession);
router.put('/sessions:id', SessionController.uptadeSession);
router.delete('/sessions:id', SessionController.deleteSession);

module.exports = router;
