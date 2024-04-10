const SessionService = require('../services/session.service');

class SessionController {
  async createSession(req, res) {
    try {
      const session = await SessionService.getSession(req.body);
      res.status(201).json(session);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getSession(req, res) {
    try {
      const sessions = await SessionService.getSessions();
      res.status(200).json(sessions);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getSession(req, res) {
    try {
      const session = await SessionService.getSession(req.params.id);
      res.status(200).json(session);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async uptadeSession(req, res) {
    try {
      const session = await SessionService.updateSession(req.params.id, req.body);
      res.status(200).json(car);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async deleteSession(req, res) {
    try {
      const session = await SessionService.deleteSession(req.params.id);
      res.status(200).json(session);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

}

module.exports = new SessionController();
