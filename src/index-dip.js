const BusinessLogicDip = require('./BusinessLogicDip')
const RestApiGateway = require('./RestApiGateway')

new BusinessLogicDip(new RestApiGateway('https://my-json-server.typicode.com/typicode/demo/posts')).getPostTitle()
  .then(title => {
    console.log(`title = ${title}` )
  })
