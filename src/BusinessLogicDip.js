module.exports = class BusinessLogicDip {
  constructor(postUseCaseOut) {
    this.postUseCaseOut = postUseCaseOut
  }

  async getPostTitle() {
    return await this.postUseCaseOut.getPostTitle()
  }
}
