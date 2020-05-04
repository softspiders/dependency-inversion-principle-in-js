const fetchPostTitle = require('./fetchPostTitle')

module.exports =  class RestApiGateway {
  constructor(endpoint) {
    this.endpoint = endpoint
  }

  async getPostTitle() {
    return await fetchPostTitle(this.endpoint)
  }
}
