/**
 * @file properties file
 * @module properties
 */

module.exports = {
  userId: 12,
  api: {
    baseUrl: `http://localhost:${
      process.env.REACT_APP_ENVIRONMENT === 'mockedApi' ? '3001' : '3000'
    }/user`,
  },
}
