const fetchPostTitle = require('./fetchPostTitle')

module.exports = class BusinessLogicNaive {
  async getPostTitle(endpointUrl) {
    return await fetchPostTitle(endpointUrl)
  }
}
