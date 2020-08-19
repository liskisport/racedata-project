const userData = require('../json/user');

const userMock = {
  add: function (server) {
    return server.get('/api/user', async (req, res) => {
      const { login, password } = Object(req.query);
      if (login && password) {
        res.json(userData);
      } else {
        res.json({});
        res.status(500);
      }
    });    
  }
};

module.exports = userMock;