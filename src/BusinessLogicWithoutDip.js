const fetchPostTitle = require('./fetchPostTitle')

module.exports = class BusinessLogicWithoutDip {
  async getPostTitle(url) {
    return await fetchPostTitle(url)
  }
}
