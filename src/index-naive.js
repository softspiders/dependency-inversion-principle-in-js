const BusinessLogicNaive =  require('./BusinessLogicNaive')

new BusinessLogicNaive().getPostTitle('https://my-json-server.typicode.com/typicode/demo/posts')
  .then(title => {
    console.log(`title = ${title}` )
  })
