const fetch = require('cross-fetch')

module.exports = async function fetchPostTitle(url) {
  const response = await fetch(url)
  const json = await response.json()
  return json[0].title
}
