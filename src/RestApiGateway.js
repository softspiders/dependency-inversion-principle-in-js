const fetchPostTitle = require('./fetchPostTitle')
const PostUseCaseOut = require('./BusinessLogicDip')

module.exports =  class RestApiGateway {
  constructor(endpoint) {
    this.endpoint = endpoint
  }

  async getPostTitle() {
    return await fetchPostTitle(this.endpoint)
  }
}
