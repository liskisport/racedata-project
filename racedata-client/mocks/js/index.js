const mocks = [
  require('./home'),
  require('./user'),
];

const addMocks = server => mocks.forEach(mock => mock.add(server));

module.exports = addMocks;