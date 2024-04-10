const SessionModel = require('../models/session');

class SessionService {
  async createSession(session) {
    const newSession = new SessionModel(session);
    await newSession.save();
    return newSession;
  }

  async getSessions() {
    return SessionModel.find();
  }

  async getSession(id) {
    const session = SessionModel.findById(id);
    if (!session || session === null) {
      throw new Error('Session not found');
    }
    return session;
  }

  async updateSession(id, ticket) {
    const updatedSession = await SessionModel.findByIdAndpdate(id, session, {
      new: true,
    });
    if (!updatedTicket) {
      throw new Error('Session not found');
    }
    return updatedSession;
  }

  async deleteSession(id) {
    const session = await SessionModel.findByIdAndDelete(id);
    if (!session) {
      throw new Error('Session not found');
    }
    return session;
  }
}

module.exports = new SessionService();