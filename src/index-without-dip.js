const BusinessLogicWithoutDip =  require('./BusinessLogicWithoutDip')

new BusinessLogicWithoutDip().getPostTitle('https://my-json-server.typicode.com/typicode/demo/posts')
  .then(title => {
    console.log(`title = ${title}` )
  })
