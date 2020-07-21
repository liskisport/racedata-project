const homeMock = {
  add: function (server) {
    return server.get('/api/home', async (req, res) => {
      res.json({
        code: 'SUCCESS',
        data: {
          page: 'Моки данных'
        }
      });
    });    
  }
};

module.exports = homeMock;