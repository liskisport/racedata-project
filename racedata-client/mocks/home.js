const homeMock = {
  add: server => {
    server.get('/', async (req, res) => {
      res.json({ code: 'SUCCESS', data: 'homePage' });
    });    
  }
};

module.exports = homeMock;