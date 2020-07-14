const mocks = [
  require('./home'),
];

const addMocks = server => mocks.forEach(mock => mock.add(server));

module.exports = addMocks;