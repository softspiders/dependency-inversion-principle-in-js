const fetch = require('cross-fetch')

module.exports = async function fetchPostTitle(endpointUrl) {
  const response = await fetch(endpointUrl)
  const json = await response.json()
  return json[0].title
}
