const middleware = {}

middleware['createAuthor'] = require('..\\middleware\\createAuthor.js')
middleware['createAuthor'] = middleware['createAuthor'].default || middleware['createAuthor']

export default middleware
