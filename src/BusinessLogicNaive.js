const fetchPostTitle = require('./fetchPostTitle')

module.exports = class BusinessLogicNaive {
  async getPostTitle(url) {
    return await fetchPostTitle(url)
  }
}
